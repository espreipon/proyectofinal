<?php

class Utils {
    /**
     * Cargar XML, local o remoto
     */
    public function getXML($url) {
        $xml = simplexml_load_file($url) or die("Error: Cannot create object");
        return $xml;
    }

    /**
     * Cargar JSON, local o remoto
     */
    public function getJSON($url) {
        $json = file_get_contents($url);
        return mb_convert_encoding($json, 'UTF-8',
             mb_detect_encoding($json, 'UTF-8, ISO-8859-1', true));
    }     

}
