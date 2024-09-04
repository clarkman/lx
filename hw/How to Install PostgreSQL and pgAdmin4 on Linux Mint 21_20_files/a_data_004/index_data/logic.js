var creative = {};
var dynamicBuilder = {};
dynamicBuilder.data = [];
var app = app || {};

/**
 * Called on the window load event.
 */
function preInit() {
  var isEnablerEnabled = setInterval(checkEnabler, 100);

  function checkEnabler() {
    if (Enabler.isInitialized()) {
      clearInterval(isEnablerEnabled);
      if (Enabler.isPageLoaded()) {
        politeLoad();
      } else {
        Enabler.addEventListener(
          studio.events.StudioEvent.PAGE_LOADED,
          politeLoad
        );
      }
    }
  }
}

/**
 * load required scripts
 */
function politeLoad() {
  Enabler.loadScript(
    "https://s0.2mdn.net/creatives/assets/1951882/dynamicBuilder.min.js",
    init
  );
}

function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.querySelector(
    ".dynamicAdvertContainer"
  );
}

function init() {
  setupDom();
  buildData();
}

function buildData() {
  var xobj = new XMLHttpRequest();
  // var url = 'json/' + window.location.href.slice(window.location.href.indexOf('?') + 1) + '.json';
  var url = dynamicContent.Infiniti_T2_Feed_Child[0].Data_URL;
  xobj.overrideMimeType("application/json");
  xobj.open("GET", url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      var data = xobj.responseText;
      dynamicBuilder.data = JSON.parse(data);
      buildDOM(".dynamicAdvertContainer", dynamicBuilder.data);
      // Polite loading
      if (Enabler.isVisible()) {
        show();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
      }
    }
  };
  xobj.send(null);
}
/**
 *  Shows the ad.
 */
function show() {
  creative.dom.mainContainer.style.display = "block";
  startAnimation(0);
}

function exitClickHandler(e) {
  var url = dynamicContent.Infiniti_T2_Feed_CTA[0].Landing_Page.Url;

  var feedVars = [
    dynamicContent.Infiniti_T2_Feed_CTA[0].Geo_Code_URL,
    dynamicContent.Infiniti_T2_Feed_DIME[0].Model_Year,
    dynamicContent.Infiniti_T2_Feed_DIME[0].Vehicle_Name[0],
    dynamicContent.Infiniti_T2_Feed_DIME[0].Offer_Type,
    dynamicContent.Infiniti_T2_Feed_Parent[0].Month,
    dynamicContent.Infiniti_T2_Feed_Parent[0].Strategy_Objective,
    dynamicContent.Infiniti_T2_Feed_Parent[0].Audience_Segment,
    dynamicContent.Infiniti_T2_Feed_CTA[0].URL_Strategy_UTM,
    dynamicContent.Infiniti_T2_Feed_CTA[0].CTA_UTM,
    dynamicContent.Infiniti_T2_Feed_DIME[0].Unique_ID,
    dynamicContent.Infiniti_T2_Feed_Child[0].Unique_ID,
    dynamicContent.Infiniti_T2_Feed_CTA[0].Unique_ID
  ];
  concatenation = feedVars.map(item => item.replace(/\s/g, "")).join("_");
  url = url.replace("PLACEHOLDER", concatenation);
  console.log("Clickout url:", url);
  Enabler.exitOverride("DynamicExit", url);
}

/**
 *  Main onload handler
 */
window.addEventListener("load", preInit);