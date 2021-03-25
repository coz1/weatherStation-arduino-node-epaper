#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "ozt-wireless";
const char* password = "Zelihacihan1";

void setup()
{
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
 
    delay(1000);
    Serial.print("Connecting..");
 
  }
  Serial.println();

  getWeatherData();
}

void getWeatherData() {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    HTTPClient http;  //Declare an object of class HTTPClient
    http.useHTTP10(true);
    http.begin("http://192.168.0.8:5757/api/v1/weather");  //Specify request destination
    http.GET(); //Send the request

    DynamicJsonDocument doc(2048);
    deserializeJson(doc, http.getStream());
    String payload = http.getStream();
    Serial.println(payload);

    //Serial.println(doc["weather"].as<long>());

   }
}

void loop() {}
