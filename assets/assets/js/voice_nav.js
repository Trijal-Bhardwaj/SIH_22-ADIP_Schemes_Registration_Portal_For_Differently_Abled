const artyom = new Artyom();

function chooseMicState() {
  let btn = document.getElementById("microphone");
  if (btn.value == "on") {
    document.getElementById("microphone").value = "off";
    document
      .getElementById("microphone")
      .find("i")
      .toggleClass("fa fa-microphone-slash");
    artyom.say("Microphone Turned OFF");
    artyom.fatality();
  } else {
    artyom.say("Microphone Turned ON");
    startContinuousArtyom();
    document.getElementById("microphone").value = "on";
  }
}

function startContinuousArtyom() {
  artyom.fatality(); // use this to stop any of

  setTimeout(function () {
    // if you use artyom.fatality , wait 250 ms to initialize again.
    artyom
      .initialize({
        lang: "en-GB", // A lot of languages are supported. Read the docs !
        continuous: true, // Artyom will listen forever
        listen: true, // Start recognizing
        debug: true, // Show everything in the console
        speed: 1, // talk normally
      })
      .then(function () {
        console.log("Ready to work !");
      });
  }, 1000);
  artyom.say("You can now navigate through voice commands.");
}

// Add a single command
var commandHello = {
  indexes: ["hello", "good morning", "hey"], // These spoken words will trigger the execution of the command
  action: function () {
    // Action to be executed when a index match with spoken word
    artyom.say("Hey! Hope you are doing good today!");
  },
};

var commands = [
  {
    indexes: ["Schemes", "Scheme"],
    action: function () {
      window.location =
        "../national_institutes";
      artyom.say("Here are some of the schemes for you.");
    },
  },
  {
    indexes: ["Grievance", "feedback", "complain", "problem"],
    action: function () {
      window.location =
        "../feedback";
      artyom.say("This is feedback section.");
    },
  },
  {
    indexes: ["Dashboard", "back"],
    action: function () {
      window.location =
        "../dashboard";
      artyom.say("You are back to dashboard.");
    },
  },
];

artyom.addCommands(commandHello);
artyom.addCommands(commands);

// Voxpow.com Voice Tracker
// 	<script src="https://cdn.voxpow.com/static/libs/v1/voxpow.js"></script>
// 	<script src="https://cdn.voxpow.com/static/libs/v1/voxpow-widget.js"></script>
// 	<script src="https://cdn.voxpow.com/media/trackers/js/vp-11108844696-ATqUHsgAvG.js"></script>
// 	<script>
// 		var voxpowShow = voxpowShowTracker(); voxpow && voxpowShow &&
// 			(voxpow.setLanguage(voxpowLanguage), voxpow.addCommands(voxpowCommands),
// 				voxpow.addCallback(voxpowCallbacks), SpeechKITT.voxpow(),
// 				SpeechKITT.setStylesheet(voxpowStylesheet), SpeechKITT.setInstructionsText(voxpowSearchMessage),
// 				SpeechKITT.setToggleLabelText(voxpowLabelText), SpeechKITT.rememberStatus(voxpowRememberStatus),
// 				SpeechKITT.render(), voxpowUseVoiceTyping && document.addEventListener && "function" == typeof
// 				voxpowInitTextVoice && (document.addEventListener("DOMContentLoaded",
// 					voxpowInitTextVoice, !1), setInterval(voxpowInitTextVoice, 1e3)));
// 	</script>