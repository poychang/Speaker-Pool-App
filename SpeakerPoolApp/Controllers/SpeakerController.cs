using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpeakerPoolApp.Core.Models;
using SpeakerPoolApp.Core.Services;
using System.Text.Json;

namespace SpeakerPoolApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeakerController : ControllerBase
    {
        private readonly ISpeakerService _speakerService;

        public SpeakerController(ISpeakerService speakerService)
        {
            _speakerService = speakerService;
        }

        [HttpGet]
        public IActionResult GetSpeakers()
        {
            return Ok(_speakerService.GetSpeakers().Result);
        }

        [HttpPost]
        public IActionResult AddSpeaker(Speaker speaker)
        {
            var result = _speakerService.AddSpeaker(speaker);

            if (result.IsSuccess)
            {
                return Ok(JsonSerializer.Serialize(result.Message));
            }
            else
            {
                return BadRequest(JsonSerializer.Serialize(result.Message));
            }
        }
        [HttpPost]
        [Route("upload-avatar-image")]
        public IActionResult UploadAvatarImage(IFormFile file)
        {
            var result = _speakerService.UploadAvatarImage(file.FileName, file.OpenReadStream());

            return Ok(result.Message);
        }
    }
}