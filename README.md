    In diesem Projekt wurde eine Webseite im Berreich Support-Fraud nachgebaut.
    Bei diesem Phänomen wird Betroffen auf Webseiten eine vermeintliche Virusinfizierung ihres Computers suggeriert.
    Damit die Authentizität gewahrt wird setzt die Täterschaft auf Möglichkeiten wie:
              - Browser-Cache überladen (der Browser wird deutlich langsamer oder stürtzt ab)
              - Überlastung des Prozessor
              - Überladung des RAM-Spechers
              
    Mit den hochgeladenen Dateien kann solch eine Webseite zu testzwecken nachgebaut werden.    Anmerkung:
                                                                                              Zur Umsetzung wurde eine Blockierung von automatisch
                                                                                              geöffneten Pop-Up-Fenstern im Browser aufgehoben. Die meisten
                                                                                              Suchmaschinen sind nach heutigem Stand mit vielen 
                                                                                              Sicherheitsfunktionen ausgestattet sodass eine 
                                                                                              Überlastung des PCs über eine Webseite nahezu
                                                                                              ausgeschlossen ist. 
                                                                                             
    Beschreibung ------------------------------------------------------------------------------------------------

    Als Haupt-Webseite ist die Apple-Market.html hinterlegt.
    Nach 5 Sekunden öffnen sich viele Pop-Up-Fenster.
    Innerhalb dieser Pop-Up-Fenstern wird jeweils die Datei script.js ausgeführt.
    Das JavaScript-File führt rechenintensive mathematische Operationen aus sodass, je nach System, ein Absturz nach 2 - 3 Minuten erfolgt.

    Ich empfehle jedem den Absturz wenn dann über eine VM zu testen.

![Webseite](Scam-Webseite.png)

    Vorraussetzungen ---------------------------------------------------------------------------------------------
    - Linux-VM mit Netzwerk-Einstellung: Netzwerkbrücke (dadurch hat die VM eine eigenständige IP unter welcher sie lokal erreichbar ist)
    - Auf diesem führen sie die beigelegte setup.sh aus
    - Anschließend starten sie den Webserver mit: sudo systemctl start apache2
    - Über eine 2. VM rufen sie die IP-Adresse des Webservers auf


    Falls es Probleme beim Ausführen gibt --------------

    - Mit Angabe der IP-Adresse vom Webserver direktes anzeigen der HTML-Seite:
              - bewege die Dateien in den Ordner von apache2 (mv Pfad/der/Dateien /var/www/html)
              - lösche die momentan enthaltene Index-File (sudo rm /var/www/html/index.html)
              - ändere den Standard-Pfad in den Configs (sudo nano /etc/apache2/apache2.conf) 
                          - Füge hinzu:
                             DirectoryIndex Apple-Market.html
                   
    - Konfigurierung vom Apache2-Webserver zur möglichen Ausführung von JavaScript-Files
              - öffne die Apache2 Config (sudo nano /etc/apache2/apche2.conf)
              - füge hinzu:
                    AddType application/javascript .js
                    AddType text/javascript .js
                
     - Speichere die Datei mit: "Control + X" und "Y" und "Enter"
     - Die Manövrierung funktioniert nur mit den Pfeiltasten

Viel Spaß dabei!!