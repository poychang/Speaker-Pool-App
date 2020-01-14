using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SpeakerPoolApp.Data.Schema
{
    /// <summary>ShortUrl 資料表模型</summary>
    public class SpeakerSet
    {
        /// <summary>識別碼</summary>
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary></summary>
        public string Avatar { get; set; }

        /// <summary></summary>
        [Required]
        public string Name { get; set; }

        /// <summary></summary>
        public string Subtitle { get; set; }

        /// <summary></summary>
        [Required]
        public string Skills { get; set; }

        /// <summary></summary>
        public string Experiences { get; set; }

        /// <summary></summary>
        public string Introduction { get; set; }

        /// <summary></summary>
        public string Remark { get; set; }

        /// <summary>建立日期</summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreateDate { get; set; }

        /// <summary>修改日期</summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime ModifyDate { get; set; }
    }
}
