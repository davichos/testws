
var canlogin = function() {

    var productServiceUrl = 'http://programaatusalud.com/adccmdev/public/wsdl/index/soap/getCcmClienteInfo';
//     $.mobile.allowCrossDomainPages = true;
//    $.support.cors = true;
    var s = send();
    function send() {
        alert("sending");
        var soapMessage = '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="http://programaatusalud.com/adccmdev/public/wsdl/index/soap" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getCcmClienteInfo env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><numeroCliente xsi:type="xsd:string">T301</numeroCliente><psw xsi:type="xsd:string">VDBSVk0wNUVZekE9</psw></ns1:getCcmClienteInfo></env:Body></env:Envelope>';
        $.ajax({
            url: productServiceUrl,
            type: "POST",
            dataType: "xml",
            data: soapMessage,
            complete: endSaveProduct,
            contentType: "text/xml; charset=\"utf-8\""
        }); 
        return false;
    }
 
    function endSaveProduct(xmlHttpRequest, status) {
        alert(status);
        alert(xmlHttpRequest);
        $.each(xmlHttpRequest,function (key,val){
            alert(key + ": " + val);
        });
        alert(xmlHttpRequest.responseXML);
//        $("#result1").text(xmlHttpRequest.responseXML);
//        $("#result2").text(xmlHttpRequest);
        alert(xmlHttpRequest.responseXML.find('return'));

         $(xmlHttpRequest.responseXML)
                    .find('return').each(function(key, value) {
            alert(key + ": " + value);

         });
        
    }

};