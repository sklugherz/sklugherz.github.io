<script setup>

</script>

<template>
    <h3>Ph4nt0m 1ntrud3r challenge from PicoCTF 2025</h3>
    <p>Welcome to my walkthrough & writup for PicoCTF's Ph4nt0m 1ntrud3r challenge.</p>
    <p>
        Lets take a look at the instructions. They require us to download a pcap file and asks us to analyze the 
        traffic and apply the right filters to uncover the threat actors malicious activity.
    </p>
    <p> <!-- make wireshark description a hover-->
        Using wireshark, or your preffered packet analysis tool, we can open the file and examine its contents.
    </p>
    <img src="../../../assets/imgs/blogs/picoCTF/phantom_intruder/initial-open.png" 
        alt="Photo of the challenge instructions">
    <p></p>

Wireshark seems to have identified the majority of them as retransmissions.

Taking a look at the information section we can see that the tcp connections are SYN only instead of the usual SYN/ACK.

This behavior is typical of a SYN Flood. Typically a SYN Flood is used in the reconnisaince faze of an attack to map out the network with a tool such as NMAP. 

Now that we've identified the type of attack the threat actor conducted lets take a look into the data of first tcp connection.

Taking a look at the segment data we can notice a familiar pattern:

### IMG REF - BASE64.png

This pattern is typically base64 encoded data. Right-clicking the data to copy it into ASCII, we can use a tool like CyberChef and decode the data. 

### IMG REF - GOOD-DATA.png

This looks like the begginning format of a flag. Interestingly enough the orginial tcp connection was not the first connection captured. 

Filtering the packets by time and trying to decode the data of the first packet, we get gibberish.

### IMG REF - BAD-DATA.png

We need to filter out the bad packets.

Looking at the differences in information between the original packet we looked at, packet NO. 1, and the bad packet we looked at, we can see a difference in tcp data length.

### IMG REF - BREAKPOINT.png

Filtering out bad packets with the length of 8:

### IMG REF - FILTERED-RESULTS.png

Decoding the rest of the packets with CyberChef gives us the flag and completes that challenge.

### IMG REF - COMPLETE_CHALLENGE.png

</template>

<style scoped>

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-height: 200px;
    width: clamp(300px, 90%, 900px);
    border: 1px solid white;
}


</style>