import express from "express";
const app = express ();
const PORT = 3000;

const equipment = [
    {id:1,name:'คอมพิวเตอร์',category:'comeputer'},
    {id:2,name:'ปริ้นท์เตอร์',category:'printer'},
    {id:3,name:'คีย์บอร์ด',category:'accessory'},
    {id:4,name:'วีอา',category:'VR'},
]

app.get("/api/equipment/getNum", (req, res) => {
    // เปลี่ยนจาก res.json(equipment) เป็นการส่ง Object ที่นับจำนวนสมาชิกแทน
    res.status(200).json({
        num: equipment.length
    });
});

app.get("/api/equipment",(req,res)=>{
    res.status(200).json(equipment);
});
app.get("/",(req,res) =>{
    res.send("HEEMAN");
});

app.get("/health",(req,res)=>{
    res.json(
        {
            status: "OK",
            message: "Server is running"
        }
    )})
app.get("/myfriend",(req,res)=>{
    const friendsList = [
  { id: "69319010007", name: "องศา" },
  { id: "69319010008", name: "เก้า" },
  { id: "69319010009", name: "ภัทร" },
  { id: "69319010010", name: "ฟรุ๊ต" },
  { id: "69319010011", name: "ธี" },
  { id: "69319010012", name: "ติม" },
  { id: "69319010013", name: "ข้าว" },
  { id: "69319010014", name: "ยูริ" },
  { id: "69319010015", name: "เท็น" },
  { id: "69319010018", name: "โมเดล" },
  { id: "69319010019", name: "ภูมิ" },
  { id: "69319010020", name: "ภู" },
  { id: "69319010022", name: "เป็ก" },
  { id: "69319010023", name: "นาย" },
    ];
    res.json(friendsList);

})

app.listen(PORT, () =>{
    console.log( `server is running on http://localhost:${PORT}`);
});

