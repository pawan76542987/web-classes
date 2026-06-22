function ReadFile(filename, Encrypt) {
    console.log("Reading file...");
    setTimeout(() => {
        let data = "Content of " + filename;
        Encrypt(data, BackupToCloud);
    }, 1000);
}
function Encrypt(data, BackupToCloud) {
    console.log("Encrypting data...");
    setTimeout(() => {
        let encrypted = btoa(data); // simple encoding
        BackupToCloud(encrypted);
    }, 1500);
}
function BackupToCloud() {
    console.log("Backing up to cloud...");
    setTimeout(() => {
        let cloudUrl = "https://cloud.storage.com/backup_" + Date.now();
        
    }, 2000);
}
ReadFile("Mirai", Encrypt);