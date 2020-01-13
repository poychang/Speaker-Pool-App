using Microsoft.AspNetCore.Mvc;
using SpeakerPoolApp.Core.Models;
using SpeakerPoolApp.Core.Services;

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

            return result.IsSuccess
                ? BadRequest(result.Message) as ObjectResult
                : Ok(result.Message) as ObjectResult;
        }
    }
}