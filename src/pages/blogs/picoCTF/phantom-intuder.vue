<script setup>

</script>

<template>
    <h2>Ph4nt0m 1ntrud3r Challenge <br> PicoCTF 2025</h2>
    <p>Welcome to my walkthrough for PicoCTF's Ph4nt0m 1ntrud3r challenge.</p>
    <p>                               <!-- add "short of packet capture file"-->
        Lets take a look at the instructions. They require us to download a 
        pcap file and asks us to analyze the traffic and apply the right 
        filters to uncover the threat actors malicious activity.
    </p>
    <!-- TODO: GET IMAGE OF CHALLENGE INSTRUCTIONS MAYBE ADD HERE OR 1 ABOve -->
    <p> <!-- make wireshark description a hover-->
        Using wireshark, or your preffered packet analysis tool, we can open the file and 
        examine its contents.
    </p>
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/initial-open.png" 
        alt="Photo of the challenge instructions">
    <p>
        Wireshark seems to have identified the majority of them as retransmissions.
    </p>
    <p>
        Taking a look at the information section we can see that the tcp connections are SYN 
        only instead of the usual SYN,ACK,SYN/ACK handshake of a normal TCP connection.
    </p>
    <p>
        This behavior is typical of a SYN Flood. Typically a SYN Flood is used in the 
        reconnisaince faze of an attack to map out the network with a tool such as NMAP. 
    </p>
    <p>
        Now that we've identified the type of attack the threat actor conducted lets take 
        a look into the data of first tcp connection.
    </p>
    <p>
        Taking a look at the segment data we can notice a familiar pattern:
    </p>
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/base64.png" 
        alt="Image of Base64 Encoding">
    <p>
        This pattern is typically base64 encoded data. Right-clicking the data to copy it 
        into ASCII, we can use a tool like CyberChef and decode the data. 
    </p>
    <!-- 
        TODO: GET BETTER IMAGE OF GOOD-DATA, Make sure height is smaller 
        and its more rectangular
        src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/good-data.png"
     -->
    
    <img 
        alt="Image of decoded Base64 data">
    <h5>
        Note: You may have to remove some of the packet 
        headers after copying it into CyberChef.
    </h5>
    <p>
        This looks like the begginning format of a flag. Interestingly enough 
        the orginial tcp connection was not the first connection captured. 
    </p>
    <p>
        Filtering the packets by time and trying to decode the data of the first 
        packet, we get gibberish.
    </p>
    <!-- 
        TODO: GET BETTER IMAGE OF GOOD-DATA, Make sure height is smaller 
        and its more rectangular
        src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/bad-data.png"
     -->
    <img  
        alt="Image of non-Base64 decoded data">
    <p>
        We need to filter out the bad packets.
    </p>
    <p>
        Looking at the differences in information between the original packet we 
        looked at, packet NO. 1, and the bad packet we looked at, we can see a 
        difference in tcp data length.
    </p>
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/breakpoint.png" 
        alt="Image of breakpoint between difference packet information lengths">
    <p class="short">
        Filtering out bad packets with the length of 8:
    </p>
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/filtered-results.png" 
        alt="Image of filtered results">
    <p>
        Examining the data from these filtered packets we can see they seem to be in the
        base64 format. Decoding all the packet data with CyberChef gives us our flag to 
        complete the challenge.
    </p>
    <!-- TODO: CROP THIS IMAGE -->
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/completed-challenge.png"
        alt="Image of decoded flag">

</template>

<style scoped>

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-height: 200px;
    width: clamp(580px, 90%, 900px);
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: 5px;
}

h5 {
    width: clamp(580px, 90%, 900px);
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

p {
    margin-top: 10px;
    margin-bottom: 10px;
}

.short {
    text-align: center;
}




</style>