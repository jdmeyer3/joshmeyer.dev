import Card from "@/components/Card";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20vh_1fr_1fr] items-center justify-items-center h-[calc(100vh-74px)]">
      <h3 className="mb-4text-4xl top font-bold leading-none tracking-tight text-gray-400 text-4xl sm:text-5xl dark:text-white select-none"><span className="bg-gradient-to-r from-blue-700 via-purple-300 to-purple-800 text-transparent bg-clip-text">Skills</span></h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        <Card title="Languages" titleIcon="coding.svg" tech={[
          {icon: "Go-Logo_Aqua.svg", title: "Golang"},
          {icon: "python-logo-only.svg", title: "Python"},
          ]}/>
        {/* <Card title="Databases" titleIcon="databases.svg"/>
        <Card title="Cloud" titleIcon="cloud.svg"/> */}
      </div>
      {/* <div className="grid grid-cols-2 gap-4 justify-center">
        <Card title="Technical" titleIcon="computer.svg"/>
        <Card title="CICD" titleIcon="cicd.svg"/>
      </div> */}
    </div>
  );
}
