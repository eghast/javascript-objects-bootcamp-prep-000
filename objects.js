<<<<<<< HEAD
var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle ){
  playlist['Phil Ochs'] = "My Bloody Valentine";
  playlist['Allison'] = "Slowdive"
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
=======
var playlist = { mcr: "Helena", 
PanicattheDisco: "Mona Lisa", 
CagetheElephant: "Break Me Down"};

function updatePlaylist(playlist, nothingbutthieves,Sorry ){
  playlist.nothingbutthieves = 'Sorry';
  return playlist;
}

function removeFromPlaylist(playlist, CagetheElephant){
  delete playlist.CagetheElephant;
>>>>>>> e45ddfb92e947c6c91cb80acc2f39dc191fe05a0
  return playlist;
  
}