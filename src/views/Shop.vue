<template>
  <v-container>
    <h1 class="text-center white red--text">NEW ITEMS</h1>
    <v-container class="d-flex flex-wrap-reverse" flat tile>
      <v-card
        class="mx-auto mb-5"
        elevation="15"
        max-width="400"
        v-for="(product, index) in productList"
        :key="index"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="product.image"
        >
        </v-img>

        <v-card-text class="text--primary">
          <div>
            <h2>{{ product.title }}</h2>
          </div>
          <div>
            <h4 class="green--text">{{ product.category }}</h4>
          </div>
          <div class="text-decoration-line-through orange--text">
            <h2>฿{{ product.price + 999 }}</h2>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red accent-3" text @click="addtofirebase()">
            <h1>฿{{ product.price }}</h1>
            <input type="text" v-model="fname" />
          </v-btn>
        </v-card-actions>
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                text
                :to="'/detail/' + product.id"
                style="font-size: 20px"
                >Detail</v-btn
              >
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark>{{ product.title }}</v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">
                    <router-view
                      :key="$route.path"
                      :pd="productList"
                    ></router-view>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-card>
    </v-container>
    <v-container grid-list-xs class="yellow">
      <router-view :key="$route.path" :pd="productList"></router-view>
    </v-container>
  </v-container>
</template>

<script>
import { db } from "../plugins/firebaseinit";
import { collection, addDoc } from "firebase/firestore";

export default {
  components: {},
  data() {
    return {
      productList: [
        {
          id: 1,
          title:
            "RAM G.SKILL RIPJAWS V 16GB (8GBx2) DDR4 2666MHz (F4-2666C19D-16GVK)",
          price: 2790.0,
          category: "RAM > RAM DDR4 > BUS 2666MHz",
          description:
            "Ripjaws V DDR4-2666 CL19-19-19-43 1.20V 16GB (2x8GB) As the latest addition to the classic Ripjaws family, Ripjaws V series is the newest DDR4 memory designed for maximum compatibility and cutting-edge performance with the latest Intel Core processors",
          image: "https://fi.lnwfile.com/_/fi/_raw/3g/y2/0f.png",
          brand: "G.SKILL",
        },
        {
          id: 2,
          title:
            "RAM CORSAIR VENGEANCE RGB PRO SL 32GB (16GBx2) DDR4 3200MHZ BLACK (CMH32GMXE3200C16)",
          price: 8490.0,
          category: "RAM > RAM DDR4 > BUS 3200MHz",
          description:
            "CORSAIR VENGEANCE RGB PRO SL DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering peak performance in 44mm-tall compact memory modules. 🔸32GB (16GBx2) 🔸DDR4 🔸3200MHz 🔸CMH32GMXE3200C16",
          image: "https://fi.lnwfile.com/_/fi/_raw/ya/t4/r5.png",
          brand: "CORSAIR",
        },
        {
          id: 3,
          title:
            "RAM CORSAIR VENGEANCE LPX 32GB (16GBx2) DDR4 3200MHz BLACK (CMK32GX4M2C3200C18)",
          price: 5990.0,
          category: "RAM > RAM DDR4 > BUS 3200MHz",
          description:
            "VENGEANCE LPX memory is designed for high-performance overclocking. The heatspreader is made of pure aluminum for faster heat dissipation, and the eight-layer PCB helps manage heat and provides superior overclocking headroom.🔸32GB (16GBx2)🔸DDR4🔸3200MHz🔸CMK32GX4M2C3200C18",
          image: "https://fi.lnwfile.com/_/fi/_raw/g0/ds/98.png",
          brand: "CORSAIR",
        },
        {
          id: 4,
          title:
            "RAM CORSAIR DOMINATOR PLATINUM RGB 32GB (16GBx2) DDR5 5600MHz WHITE (CMT32GX5M2B5600C36W)",
          price: 19190.0,
          category: "RAM > RAM DDR5 > BUS 5600MHz",
          description:
            "Push the limits of performance with CORSAIR DOMINATOR PLATINUM RGB DDR5 Memory optimized for Intel®, taking advantage of higher frequencies and greater capacities of DDR5, precisely controlled via CORSAIR iCUE software.🔸32GB(16GBx2)🔸DDR5🔸5600MHz🔸CMT32GX5M2B5600C36W",
          image: "https://fi.lnwfile.com/_/fi/_raw/l2/xp/yf.png",
          brand: "CORSAIR",
        },
        {
          id: 5,
          title: "FAN CASE COOLER MASTER MASTERFAN MF120 HALO 3IN1 BLACK",
          price: 1990.0,
          category: "Accessories - อุปกรณ์เสริม > FANCASE - พัดลม",
          description:
            "Dual Loop Addressable Gen 2 RGB Lighting Silent Cooling Technology Hybrid Fan Blade Design Wide Range of Compatibility Wired ARGB controller 🔸PRODUCT NUMBER MFL-B2DN-183PA-R1 FAN PROFILE Addressable Gen 2 RGB 🔸FAN SPEED 650-1800 RPM ± 10% FAN AIRFLOW 47.2 CFM ± 10% FAN AIR PRESSURE 1.6 mmH2O ± 10% FAN NOISE LEVEL 6 - 30 dBA FAN DIMENSIONS (L X W X H) 120 x 120 x 25 mm / 4.7 x 4.7 x 1 inch FAN MTTF 160,000 Hours FAN BEARING TYPE Rifle Bearing FAN POWER CONNECTOR 4-Pin (PWM) FAN RATED VOLTAGE 12VDC FAN RATED CURRENT 0.25A FAN SAFETY CURRENT 0.37A RGB CONNECTOR 3-Pin RGB RATED VOLTAGE 5V DC RGB RATED CURRENT 0.55A FAN POWER CONSUMPTION 3.0W FAN WEIGHT 180g x 3 WARRANTY 2 years COOLER TYPE Case Fan SERIES MasterFan FAN SIZE 120 FAN - LED LIGHTING ARGB NOTE 🔸Products manufactured after 1st June 2021 are Addressable Gen 2 RGB LEDs",
          image: "https://fi.lnwfile.com/_/fi/_raw/cw/zv/si.png",
          brand: "COOLER MASTER",
        },
        {
          id: 6,
          title:
            "เครื่องสวยสเปคเยี่ยม โชว์ความแรงเน้นๆ ! : RYZEN 5 5600X / RX 6700 Xt / B450 / Ram 16GB / SSD M.2 500GB / 750W / THERMALTAKE CORE P3 / BYKSKI OPEN LOOP 360",
          price: 66900.0,
          category: "THE BEST OF iHAVECPU",
          description:
            "CPU : AMD RYZEN 5 5600X 6C/12T 4.6GHz MB : ASROCK B450 STEEL LEGEND RAM : 16GB 2666MHz KINGSTON FURY BEAST GPU : SAPPHIRE RADEON RX 6700XT PULSE 12GB GDDR6 SSD : 500GB M.2 NVME WD BLUE SN550 PSU : 750W FSP HYDRO G PRO 80+ GOLD CASE : THERMALTAKE CORE P3 COOLING : BYKSKI OPEN LOOP 360 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มแรมเป็น 32GB เริ่มต้น +3,500 . 🔹 ของใหม่ ทั้งหมด รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม",
          image: "https://fi.lnwfile.com/_/fi/_raw/gv/qi/yx.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 7,
          title:
            "ขาวเนียน สเปคจัดเต็ม ! : CORE I5-12600KF / RTX 3070 Ti / Z690 / Ram 16GB 3200MHz / SSD M.2 500GB / 850W / CORSAIR 4000X / ID-COOLING SE-225-XT / LIANLI STRIMMER PLUS SET",
          price: 85900.0,
          category: "THE BEST OF iHAVECPU",
          description:
            "CPU : INTEL CORE I5-12600KF 10C/16T MB : MSI Z690-AERO G RAM : 16GB 3200MHz CORSAIR VENGEANCE RGB PRO SL GPU : INNO3D RTX 3070TI ICHILL X4 8GB GDDR6X SSD : 500GB M.2 NVME WD BLACK SN750SE PSU : 850W CORSAIR RM850 80+ GOLD CASE : CORSAIR iCUE 4000X WHITE COOLING : ID-COOLING SE-225-XT ACC : INWIN SIRIUS PURE ASP 120 FAN SET ACC : LIANLI STRIMMER PLUS SET . . 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มแรมเป็น 32GB เริ่มต้น +3,500 🔸 เพิ่มชุดน้ำปิด 2 ตอน เริ่มต้น +2,200 🔸 เพิ่มชุดน้ำเปิด 2 ตอน เริ่มต้น +6,800 . 🔹 ของใหม่ ทั้งหมด รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม . ⭐️ พิเศษ! มารับเครื่องเองถึงหน้าร้าน รับส่วนลดไปเลยเต็มๆ >> https://bit.ly/39JODIe ⭐️ หรือ โอนชำระเต็มจำนวน ลดทันที 3%",
          image: "https://fi.lnwfile.com/_/fi/_raw/ap/xx/q6.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 8,
          title:
            "ขาวเนี๊ยบ เรียบหรู สเปคลงตัว ! : RYZEN 7 5800X / RTX 3060 Ti / X570 / Ram 16GB 3200MHz / SSD M.2 1TB / 750W / CORSAIR 4000D / LIANLI GALAHAD 360 AIO WHITE ARGB",
          price: 74900.0,
          category: "THE BEST OF iHAVECPU",
          description:
            "🔵 ขาวเนี๊ยบ เรียบหรู สเปคลงตัว . ✅ งบ 74,900.- . CPU : AMD RYZEN 7 5800X 8C/16T 4.7GHz MB : GIGABYTE X570 UD RAM : 16GB 3200MHz CORSAIR VENGEANCE RGB PRO SL GPU : GALAX RTX 3060TI 1CLICK OC 8GB GDDR6 SSD : 1TB M.2 NVME WD BLACK SN750SE PSU : 750W MSI A750GF 80+ GOLD CASE : CORSAIR 4000D AIRFLOW WHITE COOLING : LIANLI GALAHAD 360 AIO WHITE ARGB . . 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มแรมเป็น 32GB เริ่มต้น +3,500 🔸 เพิ่มชุดน้ำเปิด 2 ตอน เริ่มต้น +6,800 . 🔹 ของใหม่ ทั้งหมด รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม . ⭐️ พิเศษ! มารับเครื่องเองถึงหน้าร้าน รับส่วนลดไปเลยเต็มๆ >> https://bit.ly/39JODIe ⭐️ หรือ โอนชำระเต็มจำนวน ลดทันที 3%",
          image: "https://fi.lnwfile.com/_/fi/_raw/r6/24/ag.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 9,
          title:
            "สเปคลงตัว เล่นเกมสบาย ! : CORE I5-11400F / RTX 2060 / B560M / Ram 16GB / SSD M.2 500GB / 650W",
          price: 40900.0,
          category: "THE BEST OF iHAVECPU",
          description:
            "สเปคลงตัว เล่นเกมสบาย 🚀 . ✅ งบ 40,900.- . CPU : INTEL CORE I5-11400F 6C/12T 4.4GHz MB : MSI B560M PRO E RAM : 16GB 2666MHz KINGSTON FURY BEAST GPU : ZOTAC RTX 2060 TWINFAN 6GB GDDR6 SSD : 500GB M.2 NVME WD BLUE SN550 PSU : 650W CORSAIR CV650 80+ BRONZE CASE : MONTECH X2 BLACK . . 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มแรมเป็น 32GB เริ่มต้น +3,500 🔸 เพิ่มชุดน้ำปิด 2 ตอน เริ่มต้น +2,200 🔸 เพิ่มชุดน้ำเปิด 2 ตอน เริ่มต้น +6,800 . 🔹 ของใหม่ ทั้งหมด รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม . ⭐️ พิเศษ! มารับเครื่องเองถึงหน้าร้าน รับส่วนลดไปเลยเต็มๆ >> https://bit.ly/39JODIe ⭐️ หรือ โอนชำระเต็มจำนวน ลดทันที 3%",
          image: "https://fi.lnwfile.com/_/fi/_raw/56/as/rg.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 10,
          title:
            "INTEL i7-12700 2.1GHz 12C/20T / Z690 / RAM 16GB DDR4 2666MHz / SSD 480GB / 600W / เลือกเคสและการ์ดจอได้",
          price: "31790-96790",
          category: "THE BEST OF iHAVECPU",
          description:
            "CPU : INTEL CORE I7-12700 2.1GHz 12 Core (8P + 4E) / 20 Threads MB : Z690 RAM : 16GB DDR4 2666MHz VGA : เลือกการ์ดจอได้ (ไม่มีการ์ดจอใช้งานไม่ได้) SSD : 480 GB PSU : 600W 80+ CASE : เลือกได้ครับ",
          image: "https://fi.lnwfile.com/_/fi/_raw/kc/bg/wn.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 11,
          title:
            "INTEL i7-12700 2.1GHz 12C/20T / B660M / RAM 16GB DDR4 2666MHz / SSD 480GB / 600W / เลือกเคสและการ์ดจอได้",
          price: "29790-94790",
          category: "THE BEST OF iHAVECPU",
          description:
            "CPU : INTEL CORE I7-12700 2.1GHz 12 Core (8P + 4E) / 20 Threads MB : B660M RAM : 16GB DDR4 2666MHz VGA : เลือกการ์ดจอได้ (ไม่มีการ์ดจอใช้งานไม่ได้) SSD : 480 GB PSU : 600W 80+ CASE : เลือกได้ครับ",
          image: "https://fi.lnwfile.com/_/fi/_raw/xp/if/a2.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 12,
          title: "CPU INTEL 1700 CORE I7-12700 2.1 GHz 12C/20T",
          price: 13790,
          category: "CPU > SOCKET >LGA 1700",
          description:
            "INTEL 1700 CORE I7-12700 2.1 GHz 12C/20T 🔸12 (8P+4E) Cores 🔸20 Threads 🔸Intel UHD Graphics 770",
          image: "https://fi.lnwfile.com/_/fi/_raw/31/na/xr.png",
          brand: "INTEL",
        },
        {
          id: 13,
          title: "LIQUID COOLER MSI MAG CORELIQUID C240 ARGB",
          price: 4390,
          category: "Liquid Cooling 240mm",
          description:
            "MSI MAG CORELIQUID C240 ARGB REBELLIOUS AND DISTINCT 🔸 The MAG CORELIQUID C Series liquid cooler provides out of box support for LGA 1700. 🔸 The pump has been integrated into the radiator for sound dampening and noise reduction. 🔸 A split pathway through the radiator rapidly dissipates heat, cooled liquid is then pumped back into the loop. 🔸 A durable three phase motor at the core of the pump generates minimal vibrations for long-lasting operation. 🔸 Constructed with three layers of netted plastic tubing and a reinforced mesh exterior. ยี่ห้อ MSI รุ่น MAG CORELIQUID C240 ARGB สี BLACK ขนาด 276 x 120 x 27mm",
          image: "https://fi.lnwfile.com/_/fi/_raw/ux/lh/lc.png",
          brand: "MSI",
        },
        {
          id: 14,
          title: "CASE CORSAIR iCUE 5000T RGB BLACK (CC-9011230-WW)",
          price: 12590,
          category: "CASE > CORSAIR",
          description:
            "CORSAIR iCUE 5000T RGB BLACK (CC-9011230-WW) The CORSAIR iCUE 5000T RGB’s contoured curves and 208 individually addressable RGB LEDs make your system unmistakable, while CORSAIR RapidRoute and a spacious interior make it easy to build. น้ำหนัก 14,530 กรัม ยี่ห้อ CORSAIR รุ่น iCUE 5000T RGB สี BLACK ขนาด 560 x 530 x 251 mm",
          image: "https://fi.lnwfile.com/_/fi/_raw/4t/u9/e4.png",
          brand: "CORSAIR",
        },
        {
          id: 15,
          title: "CASE CORSAIR iCUE 5000T RGB WHITE (CC-9011231-WW)",
          price: 12590,
          category: "CASE > CORSAIR",
          description:
            "CORSAIR iCUE 5000T RGB WHITE (CC-9011231-WW) The CORSAIR iCUE 5000T RGB’s contoured curves and 208 individually addressable RGB LEDs make your system unmistakable, while CORSAIR RapidRoute and a spacious interior make it easy to build. น้ำหนัก 14,530 กรัม ยี่ห้อ CORSAIR รุ่น iCUE 5000T RGB สี WHITE ขนาด 560 x 530 x 251 mm",
          image: "https://fi.lnwfile.com/_/fi/_raw/7s/xf/uw.png",
          brand: "CORSAIR",
        },
        {
          id: 16,
          title: "LIAN LI STRIMER PLUS UNLOCK TRIPLE 8 PIN (3 X 8PIN) 300MM",
          price: 1890.0,
          category: "Accessories - อุปกรณ์เสริม",
          description:
            "LIAN LI STRIMER PLUS UNLOCK TRIPLE 8 PIN (3 X 8PIN) 300MM Addressable RGB extension cables. Multi-connector support MB 24PIN, GPU 8 PIN. Unparalleled RGB effects.Brighter and more complex light effects,premium build quality with a clean look,vibrant and smooth lighting quality.work better,last longer. 🔸ขนาดแพ็คเกจ 14.37 x 3.43 x 1.38 นิ้ว 🔸น้ำหนักรายการ 12 ออนซ์ 🔸สายไฟ 8 PIN 3หัว RGB VGA ที่ปรับแต่งได้ 🔸รองรับ RTX 3000 Series ยี่ห้อ LIAN LI รุ่น STRIMER PLUS สี WHITE ขนาด 345mm X 56.3mm X 11mm",
          image: "https://fi.lnwfile.com/_/fi/_raw/wc/ap/im.png",
          brand: "LIAN LI",
        },
        {
          id: 17,
          title: "MONITOR AOPEN 32HC5QR 31.5 inch VA 165Hz",
          price: 7990,
          category: "Monitor > AOPEN",
          description:
            "AOPEN 32HC5QR 31.5 inch VA 165Hz ประเภทพาเนล VA ขนาดหน้าจอ 31.5 inch รูปแบบหน้าจอ จอโค้ง ความละเอียดสูงสุด 1920x1080 (Full HD) อัตรารีเฟรช 165Hz อัตราการตอบสนอง 5ms การเชื่อมต่อภาพ HDMI, Display Port ยี่ห้อ AOPEN รุ่น 32HC5QR 31.5 inch VA 165Hz สี BLACK",
          image: "https://fi.lnwfile.com/_/fi/_raw/4e/04/sm.png",
          brand: "AOPEN",
        },
        {
          id: 18,
          title:
            "GAMING CHAIR NOBLECHAIRS HERO BLACK EDITION (NBL-HRO-PU-BED-SGL )",
          price: 17900.0,
          category: "Gaming Chair > NOBLECHAIRS",
          description:
            "NOBLECHAIRS HERO BLACK EDITION (NBL-HRO-PU-BED-SGL ) Premium gaming- and office chair from noblechairs, PU-leather in black, Comfortable cold foam upholstery, Superior ergonomics thanks to adjustment options, 2.3inch casters, Supports up to 330 lbs. With the arrival of the Black Edition, the noblechairs HERO range is receiving a visual and material upgrade. The new and unique upholstery belongs to the next generation of breathable seating materials. This innovative hybrid material from Germany that consists of an ingenious blend of vinyl and polyurethane manages to offer the very best characteristics of both. The result is an ultra-soft surface that is exceptionally durable. Additionally, the new stainless steel grips, the visually more stunning wheelbase and the improved armrests help round out this premium upgrade to an already high-quality gaming chair. Premium cushion set included. ยี่ห้อ NOBLECHAIRS รุ่น HERO BLACK EDITION สี BLACK",
          image: "https://fi.lnwfile.com/_/fi/_raw/74/7m/92.png",
          brand: "NOBLECHAIRS",
        },
        {
          id: 19,
          title:
            "โฉบเฉี่ยวโดนใจ ซีพียูตัวท็อป ! : CORE I9-12900K / RTX 3060Ti / Z690 / Ram 32GB 3600MHz / SSD M.2 1TB / 850W / ANTEC TORQUE / GIGABYTE AORUS X 360 AIO",
          price: 119900,
          category: "THE BEST OF iHAVECPU",
          description:
            "โฉบเฉี่ยวโดนใจ พร้อมซีพียูตัวท็อป 🔻 . ✅ งบ 119,900.- . CPU : INTEL CORE I9-12900K 16C/24T 5.2GHz MB : ASROCK Z690 EXTREME WIFI6E RAM : 32GB 3600MHz CORSAIR VENGEANCE RGB RS GPU : EVGA RTX 3060Ti FTW3 8GB GDDR6X SSD : 1TB M.2 NVME WD BLACK SN850 PSU : 850W THERMALTAKE TOUGHPOWER PF1 80+ PLATINUM CASE : ANTEC TORQUE BLACK RED COOLING : GIGABYTE AORUS X 360 AIO ACC : CUSTOM CARBON CABLE SLEEVE . . 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มชุดน้ำเปิด 2 ตอน เริ่มต้น +6,800 . 🔹 #ของใหม่ ทั้งหมด #รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม . ⭐️ พิเศษ! มารับเครื่องเองถึงหน้าร้าน รับส่วนลดไปเลยเต็มๆ >> https://bit.ly/39JODIe ⭐️ หรือ โอนชำระเต็มจำนวน ลดทันที 3%",
          image: "https://fi.lnwfile.com/_/fi/_raw/vq/pr/dg.jpg",
          brand: "iHAVECPU",
        },
        {
          id: 20,
          title:
            "สุดทั้งการ์ดจอและซีพียู ! : RYZEN 9 5950X / RTX 3090 / X570 / Ram 32GB 3200MHz / SSD M.2 1TB / 850W / CORSAIR 5000D / CORSAIR iCUE H150i ELITE CAPELLIX",
          price: 169900,
          category: "THE BEST OF iHAVECPU",
          description:
            "สุดทั้งการ์ดจอและซีพียู แรงไปยาวๆ 🔥 . ✅ งบ 169,900.- . CPU : AMD RYZEN 9 5950X 16C/32T 4.9GHz MB : GIGABYTE X570 UD RAM : 32GB 3200MHz CORSAIR VG RGB PRO SL GPU : GALAX RTX 3090 SG 24GB GDDR6X SSD : 1TB M.2 NVME PIONEER PSU : 850W SILVERSTONE DA850 80+ GOLD CASE : CORSAIR 5000D AIRFLOW BLACK COOLING : CORSAIR iCUE H150i ELITE CAPELLIX . . 🔰 แถมฟรี! เสื้อ + เพลท iHAVECPU + USB WiFi 🔰 จัดพร้อมจอ แถมอีก! เมาส์+คีย์บอร์ด+หูฟังเกมมิ่ง . 🔸 เพิ่มจอ 24 นิ้ว 75Hz เริ่มต้น +4,400 🔸 เพิ่มจอ 24 นิ้ว 144Hz เริ่มต้น +6,000 🔸 เพิ่มชุดน้ำเปิด 2 ตอน เริ่มต้น +6,800 . 🔹 ของใหม่ ทั้งหมด รับประกัน 3 ปีเต็ม !! 🔹 สามารถอัพเกรด ปรับเปลี่ยนสเปคได้ผ่าน inbox 🔹 แก้ไขปัญหารวดเร็ว ผ่านโปรแกรมรีโมท 🔹 #จัดส่งฟรี ทั่วประเทศ #เก็บปลายทาง ได้ไม่ชาร์จเพิ่ม . ⭐️ พิเศษ! มารับเครื่องเองถึงหน้าร้าน รับส่วนลดไปเลยเต็มๆ >> https://bit.ly/39JODIe ⭐️ หรือ โอนชำระเต็มจำนวน ลดทันที 3%",
          image: "https://fi.lnwfile.com/_/fi/_raw/sv/tt/au.jpg",
          brand: "iHAVECPU",
        },
      ],
      item: [],
      qty: null,
      fname: "",
    };
  },

  methods: {
    async addtofirebase() {
      try {
        const docRef = await addDoc(collection(db, "product"), {
          id: 1,
          title:
            "RAM G.SKILL RIPJAWS V 16GB (8GBx2) DDR4 2666MHz (F4-2666C19D-16GVK)",
          price: 2790.0,
          category: "RAM > RAM DDR4 > BUS 2666MHz",
          description:
            "Ripjaws V DDR4-2666 CL19-19-19-43 1.20V 16GB (2x8GB) As the latest addition to the classic Ripjaws family, Ripjaws V series is the newest DDR4 memory designed for maximum compatibility and cutting-edge performance with the latest Intel Core processors",
          image: "https://fi.lnwfile.com/_/fi/_raw/3g/y2/0f.png",
          brand: "G.SKILL",
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },

    addToCart(items) {
      this.item.push(items);
    },
    addcart(item) {
      this.$router.push({
        name: "cart",
        params: {
          s: item,
        },
      });
    },
  },
};
</script>

<style></style>
