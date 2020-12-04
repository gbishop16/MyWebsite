
 
const bandInput = $("#band_input");
const latestFavBand = $("#latest_vote");
const voteOnBand = $("#vote_band");
const bandOutput = $("#band_output");

var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("bands/latestFavBand");



function voteSuccess() {
  console.log("vote saved!");
}

function generalErrorHandler(error) {
    console.log("Got an error", error);
};

function submitBandVote() {
    console.log('submitting band vote: ' + bandInput.val());
    databaseDocumentRef.set(
      {
          latestBand : bandInput.val(),
          guitarRating: 9,
          drummerRating: 6,
          bassRating: 3
      }
    ).then(voteSuccess).catch(generalErrorHandler);
}
function getVoteSuccess(dataWrapper){
  console.log(dataWrapper);
  if(dataWrapper && dataWrapper.exists)
  {
    var documentData = dataWrapper.data();
    console.log(documentData);
    $("#band_output").html(documentData['latestBand']);
  }
}

function getLatestVote() {
  console.log('getting latest vote: ');
  databaseDocumentRef.get().then(getVoteSuccess).catch(generalErrorHandler);
}


voteOnBand.click(submitBandVote); 
latestFavBand.click(getLatestVote);
