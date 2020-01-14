using SpeakerPoolApp.Core.Models;
using SpeakerPoolApp.Data;
using SpeakerPoolApp.Data.Repository;
using SpeakerPoolApp.Data.Schema;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace SpeakerPoolApp.Core.Services
{
    public class SpeakerService : ISpeakerService
    {
        private readonly IRepository<SpeakerSet> _repo;

        public SpeakerService(IDbManager dbManager)
        {
            _repo = dbManager.Repository<SpeakerSet>();
        }

        public OperationResult<List<Speaker>> GetSpeakers()
        {
            try
            {
                var separater = new string[] { ";" };
                return new OperationResult<List<Speaker>>
                {
                    IsSuccess = true,
                    Message = $"Succeeded to fetch speaker list data.",
                    Result = _repo.Read().Select(p => MappingSpeakerSetToSpeaker(p)).ToList()
                };
            }
            catch (Exception ex)
            {
                return new OperationResult<List<Speaker>>
                {
                    IsSuccess = false,
                    Message = $"Failed to fetch speakers list data. {ex.Message}",
                    Result = new List<Speaker>()
                };
            }
        }

        public OperationResult<Speaker> AddSpeaker(Speaker speaker)
        {
            try
            {
                var isSpeakerExist = _repo.Read().Any(p => p.Name == speaker.Name);
                if (isSpeakerExist)
                {
                    return new OperationResult<Speaker>
                    {
                        IsSuccess = false,
                        Message = $"Failed to Add the speaker. {speaker.Name} is existed.",
                        Result = _repo.Read()
                            .Select(p => MappingSpeakerSetToSpeaker(p))
                            .SingleOrDefault(p => p.Name == speaker.Name)
                    };
                }
                else
                {
                    _repo.Create(new SpeakerSet
                    {
                        Avatar = speaker.Avatar,
                        Name = speaker.Name,
                        Subtitle = speaker.Subtitle,
                        Skills = speaker.Skills.Aggregate((pre, nxt) => $"{pre};{nxt}"),
                        Experiences = speaker.Experiences.Aggregate((pre, nxt) => $"{pre};{nxt}"),
                        Introduction = speaker.Introduction,
                        Remark = speaker.Remark,
                        CreateDate = DateTime.Now,
                        ModifyDate = DateTime.Now
                    });
                    _repo.SaveChanges();
                    return new OperationResult<Speaker>
                    {
                        IsSuccess = true,
                        Message = $"Succeeded to add the speaker. {speaker.Name} is added.",
                        Result = speaker
                    };
                }

            }
            catch (Exception ex)
            {
                return new OperationResult<Speaker>
                {
                    IsSuccess = false,
                    Message = $"Failed to add speaker. ${ex.Message} {ex.InnerException?.Message}",
                    Result = speaker
                };
            }
        }

        public OperationResult UploadAvatarImage(string filename, Stream stream)
        {
            try
            {
                if (stream.Length > 0)
                {
                    var savePath = $"images\\avatar\\{filename}";
                    using (var filestream = new FileStream(savePath, FileMode.Create))
                    {
                        stream.CopyTo(filestream);
                    }
                }
                return new OperationResult
                {
                    IsSuccess = true,
                    Message = $"Succeeded to upload avatar."
                };
            }
            catch (Exception ex)
            {
                return new OperationResult
                {
                    IsSuccess = false,
                    Message = $"Failed to upload avatar. {ex.Message}"
                };
            }
        }

        private static Speaker MappingSpeakerSetToSpeaker(SpeakerSet speakerSet)
        {
            var separater = new string[] { ";" };
            return new Speaker
            {
                Avatar = speakerSet.Avatar,
                Name = speakerSet.Name,
                Subtitle = speakerSet.Subtitle,
                Skills = speakerSet.Skills.Split(separater, StringSplitOptions.RemoveEmptyEntries),
                Experiences = speakerSet.Experiences.Split(separater, StringSplitOptions.RemoveEmptyEntries),
                Introduction = speakerSet.Introduction,
                Remark = speakerSet.Remark
            };
        }
    }

    public interface ISpeakerService
    {
        OperationResult<List<Speaker>> GetSpeakers();
        OperationResult<Speaker> AddSpeaker(Speaker speaker);
        OperationResult UploadAvatarImage(string filename, Stream fileStream);
    }
}
