
var canlogin = function() {
//    document.addEventListener('deviceready', function() {
//        $(document).bind('pageinit', function() {
            var a=$.soap({
                url: 'http://adventasoluciones.com.mx/detallistas/public/wsdl/index',
                method: 'http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap/getCcmClienteInfo',
                appendMethodToURL: false,
                SOAPAction: 'null',
                soap12: false,
                wss: {},
                params:  '<?xml version="1.0" encoding="UTF-8"?><env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:getCcmClienteInfo env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><numeroCliente xsi:type="xsd:string">T301</numeroCliente><psw xsi:type="xsd:string">VDBSVk0wNUVZekE9</psw></ns1:getCcmClienteInfo></env:Body></env:Envelope>',
                namespaceQualifier: 'ns1',
                namespaceURL: 'http://adventasoluciones.com.mx/detallistas/public/wsdl/index/soap',
                noPrefix: true,
                elementName: null,
                enableLogging: false,
                request: function(SOAPRequest) {
                    alert('request');
                    alert(SOAPRequest);
                },
                success: function(SOAPResponse,a,b) {
                    alert('sucess');
                    alert(SOAPResponse);
                    alert(a);
                    alert(b);
                },
                error: function(SOAPResponse) {
                    alert('Error!');
                }
            });
//            alert(a);
//        });
//    }, null);
};