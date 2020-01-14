using SpeakerPoolApp.Data.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace SpeakerPoolApp.Data
{
    /// <summary>SQLite 資料庫管理者</summary>
    public class SqliteManager : DbManager
    {
        /// <summary>建構式</summary>
        /// <param name="optionsAccessor"></param>
        public SqliteManager(IOptions<DbManagerOptions> optionsAccessor) : base(optionsAccessor) { }

        /// <summary>使用 SQLite 資料庫</summary>
        protected override void UseDbContext()
        {
            var contextOptions = new DbContextOptionsBuilder<SpeakerPoolDbContext>()
                .UseSqlite(OptionsAccessor.Value.ConnectionString)
                .Options;
            Context = new SpeakerPoolDbContext(contextOptions);
        }
    }
}
