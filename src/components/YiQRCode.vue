<template>
  <div class="YiQrCode">
    <H1>QR code Generator for Yi Cameras</H1>
    <p>This probably won't work but serves as a working example of how to generate the QR Codes</p>
    
    <div id="bindKey">
      <label for="bindKey">Bind Key:</label>
      <input v-model="bindKey" placeholder="EU28FM4aoN1vWOML">
    </div>
    <div id="SSID">
      <label for="ssid">SSID:</label>
      <input v-model="ssid" placeholder="e.g. TellMyWifiSaidHello">
    </div>
    <div id="Password">
      <label for="password">Password:</label>
      <input v-model="password" placeholder="i.e. hunter2">
    </div>
    <div v-if=CanGenerate>
            <H3>Raw Result: {{qrCodeString}}</H3>
    <qrcode-vue :value="qrCodeString" :size="size" :level="level"></qrcode-vue>
    </div>
    <div v-else>
        <h3>Fill out the input boxes below to generate a QR code</h3>
    </div>
    <p>Note:: This currently isn't useful to anyone as the firmware on the cameras need to know the binding details</p>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "YiQrCode",
  data() {
    return {
      obfuscationKey:
        "89JFSjo8HUbhou5776NJOMp9i90ghg7Y78G78t68899y79HY7g7y87y9ED45Ew30O0jkkl",
      size: 300,
      level: "H",
      background: "#ffffff",
      foreground: "#000000"
    };
  },
  props: {
    bindKey: String,
    ssid: String,
    password: String
  },
  components: {
    QrcodeVue
  },
  computed: {
    qrCodeString: function() {
      return (
        "b=" +
        this.bindKey +
        "&s=" +
        btoa(this.ssid) +
        "&p=" +
        btoa(this.xorIt(this.password, this.obfuscationKey))
      );
    },
    CanGenerate: function() {
      return this.bindKey && this.ssid && this.password;
    }
  },
  methods: {
    xorIt(textOrCipher, key) {
      if (!key || !textOrCipher) {
        throw "XorIt: needs key and textOrCipher";
      }

      let cipher = [];
      const keyLength = key.length;
      const { fromCharCode } = String;

      for (let i = 0; i < textOrCipher.length; ++i) {
        cipher.push(
          fromCharCode(
            key.charCodeAt(i % keyLength) ^ textOrCipher.charCodeAt(i)
          )
        );
      }

      return cipher.join("");
    }
  }
};
</script>