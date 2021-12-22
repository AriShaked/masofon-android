# masofon-android

====installation====

open vscode on project path ...\super-pharm\masofon-android

-------------------how to run app on emulator-------------------

(it cant simulate file system at the current so it wont get soti file but you can debug othr stuff kike visual stuff with it)

open android studio on ...\super-pharm\masofon-android :
	click AVD manager

	if device exists press play

run on vscode trminal  on this path:   ../super-pharm/masofon-android ,

  then run this commands:
     cordova build
     cordova run android

if you are doing changes in code
to see changes on emulator:

go to
    ....\super-pharm\masofon-android\platforms\android\app\build\outputs\apk\debug


and delete : app-debug.apk 

then do again

   cordova build
   cordova run android

to see app on browser :

 cordova run browser

if cordova run android fails try
adb uninstall <package_name>


if evetthing works , to debug app: 
open in chrome:  chrome://inspect/#devices

wait till you see device details then click inspect 


--------------------------to sign apk-----------------------------------

open again android studio on : ....\super-pharm\masofon-android\platforms\android

press build then: click =>  make project
press build then: click =>  make modue android app
press build then:click =>   run generate source gradle tasks
press build then: click =>  select build variant => then on the right of the screen click "app"
press build then: click =>  build bundle/apk => choose apk
press build then: click =>  geberate signed bundle apk => choose apk


after signed apk buld is done :

connect masofon to computer with usb
take =>  app-release.apk     from:   .....super-pharm\masofon-android\platforms\android\app\release\app-release.apk
and drag to desktop
then drag the copy to download folder on the masofon
you can disconnect masofon from compuetr

then use masofon gui
pin code is 3001
long press on bottom right triangle = > choose adminstrator
enter pw:  Bbfree
press on apps icon on bottom 
press on bluebird file manager =>download=> press on app-release.apk => 

התקן=>  תן למכשיר להחליט => התקן בכל זאת 
לא לשלוח לסריקה

פתח

