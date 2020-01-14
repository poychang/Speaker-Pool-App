using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SpeakerPoolApp.Core.Models
{
    public class Speaker
    {
        public string Avatar { get; set; }
        [Required]
        public string Name { get; set; }
        public string Subtitle { get; set; }
        [Required]
        public IEnumerable<string> Skills { get; set; }
        public IEnumerable<string> Experiences { get; set; }
        public string Introduction { get; set; }
        public string Remark { get; set; }
    }
}
