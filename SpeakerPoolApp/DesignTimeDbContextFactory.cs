using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SpeakerPoolApp.Data.Schema;
using System.IO;

namespace SpeakerPoolApp
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<SpeakerPoolDbContext>
    {
        public SpeakerPoolDbContext CreateDbContext(string[] args)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var options = new DbContextOptionsBuilder<SpeakerPoolDbContext>()
                .UseSqlite(configuration["DbManagerOptions:ConnectionString"], b => b.MigrationsAssembly("SpeakerPoolApp"))
                .Options;

            return new SpeakerPoolDbContext(options);
        }
    }
}
