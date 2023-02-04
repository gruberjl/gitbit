$CCMFile = "https://gitbit-my.sharepoint.com/:u:/g/personal/john_gruber_gitbit_org/ERGtvtJQz79KoNZRjdkeVrsBnbhBPVrObxMnsYBj2ZNSDA?e=sia4ig"
New-Item -ItemType Directory -Force -Path c:\temp\
if (Test-Path "c:\temp\ccmsetup.exe") {
write-host "delete file"
  Remove-Item "c:\temp\ccmsetup.exe"
}
Invoke-WebRequest -Uri "$($CCMFile)&download=1" -OutFile "c:\temp\ccmsetup.exe"
Start-Process -NoNewWindow -FilePath "c:\temp\ccmsetup.exe" -ArgumentList "/uninstall"

Remove-Item -Path HKLM:\SOFTWARE\Microsoft\DeviceManageabilityCSP -Force -Confirm:$false -Recurse
Remove-Item -Path HKLM:\SOFTWARE\Microsoft\CCMSetup -Force -Confirm:$false -Recurse