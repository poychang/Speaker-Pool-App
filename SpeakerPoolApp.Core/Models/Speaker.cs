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
        public IEnumerable<string> Skills { get; set; } = new List<string>();
        public string Introduction { get; set; }
        public IEnumerable<string> Experience { get; set; } = new List<string>();
        public string Remark { get; set; }
    }
}
