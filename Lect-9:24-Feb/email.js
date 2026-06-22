function FetchEmail(emailId, ScanForVirus) {
  console.log("Fetching email...");
  setTimeout(() => {
    let email = { id: emailId, content: "Hello World" };
    ScanForVirus(email, MoveToInbox);
  }, 1000);
}

function ScanForVirus(email, MoveToInbox) {
  console.log("Scanning for virus...");
  setTimeout(() => {
    email.scanned = true;
    MoveToInbox(email);
  }, 1500);
}

function MoveToInbox(email) {
  console.log("Moving to inbox...");
  setTimeout(() => {
    email.location = "inbox";
  }, 1000);
}
FetchEmail("email", ScanForVirus);