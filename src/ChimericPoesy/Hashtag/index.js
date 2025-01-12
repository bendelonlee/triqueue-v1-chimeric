import "./hashtag.css";
import MetaText from "../MetaText.js";

export default function App() {
  const interval = 1000; // Transition interval in milliseconds

  return (
    <div
      className="hashtag-poesy-container"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(3, 1fr)`,
        gap: "54px",
      }}
    >
      <MetaText interval={interval} texts={[""]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText interval={interval} texts={["hash tag, you're (r)itt(c)hh"]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText
        interval={8000}
        texts={[
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "H",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "h",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "4",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "F",
        ]}
      />
      <MetaText
        interval={6000}
        texts={["go", "goo", "goof", "goo", "go", "g"]}
      />
      <MetaText
        interval={1000}
        texts={[
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "oof        ",
          "off        ",
          "oof        ",
          "off        ",
          "oof        ",
          "off        ",
          "oHf        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "Ho2        ",
          "o2H        ",
          "2Ho        ",
          "Ho2        ",
          "2Ho        ",
          "H2o        ",
          "Ho2        ",
          "2Ho        ",
          "o2H        ",
          "oH2        ",
          "H2O        ",
          "H2O        ",
          "H2O        ",
          "H2O        ",
          "H2O        ",
          "H2O        ",
          "2HO        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oFH        ",
          "HFo        ",
          "HoH        ",
          "oFH        ",
          "HFo        ",
          "HoH        ",
          "oFH        ",
          "FFo        ",
          "FoH        ",
          "oFH        ",
          "FFo        ",
          "FoH        ",
          "oFH        ",
          "FFo        ",
          "FoF        ",
          "oFF        ",
          "FFo        ",
          "FoF        ",
          "off & on   ",
          "off &hon   ",
          "off & on   ",
          "off &hon   ",
          "off &hone  ",
          "off &hon   ",
          "off &hone  ",
          "off &honey ",
          "off &hone  ",
          "off& honey ",
          "off0 honey ",
          "off& honey ",
          "off0 honey ",
          "of10 honey ",
          "off0 honey ",
          "of10 honey ",
          "of10nhoney ",
          "of10 honey ",
          "of1enhoney ",
          "of10nhoney ",
          "of1enhoney ",
          "ofte,honey ",
          "Of1enhoney ",
          "ofte,honey ",
          "oftenhoney ",
          "ofte,honey ",
          "Oftenhoney ",
          "oft ,honey ",
          "oft, honey ",
          "of,  honey ",
          "o,f  honey ",
          "o,f  honey ",
          ",ff  honey ",
          "off  honey ",
          "off  haney ",
          "off  handy ",
          "off  switch",
          "off        ",
          "ooff       ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off &gain  ",
        ]}
      />
      <MetaText
        interval={10000}
        texts={[
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "gird",
          "gidr",
          "gid ",
          "gdi ",
          "gd  ",
          "g-d ",
          "gd- ",
          "gd  ",
          "g d ",
          "g   ",
          "G   ",
          "G-  ",
          "G-r ",
          "Gr  ",
          "Gr- ",
          "Gr-p",
          "Grep",
          "Grip",
          "grip",
          "grib",
        ]}
      />
    </div>
  );
}
