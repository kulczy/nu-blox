export default function () {

    // Get date
    var now = new Date();
    var y = now.getFullYear().toString();
    var m = ( now.getMonth() + 1 ).toString();
    var d = now.getDate().toString();
    var ho = now.getHours().toString();
    var mn = now.getMinutes().toString();
    var se = now.getSeconds().toString();
    var ms = now.getMilliseconds().toString();

    // Add random number
    var rdm = Math.floor( 1000000000 + Math.random() * 9000000000 );
    rdm = rdm.toString();

    // Add 0 to singles
    m = ( '0' + m ).slice( -2 );
    d = ( '0' + d ).slice( -2 );
    ho = ( '0' + ho ).slice( -2 );
    mn = ( '0' + mn ).slice( -2 );
    se = ( '0' + se ).slice( -2 );
    ms = ( '0' + ms ).slice( -3 );

    // Return full string
    return y + m + d + ho + mn + se + ms + rdm;
};
