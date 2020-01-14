using Microsoft.EntityFrameworkCore;

namespace SpeakerPoolApp.Data.Schema
{
    public class SpeakerPoolDbContext : DbContext
    {
        /// <summary>建構式</summary>
        /// <param name="options">設定 TalasUrlDbContext 的選項</param>
        public SpeakerPoolDbContext(DbContextOptions<SpeakerPoolDbContext> options)
            : base(options)
        {
        }

        public DbSet<SpeakerSet> SpeakerSet { get; set; }
    }
}
