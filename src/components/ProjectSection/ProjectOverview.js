import StackLabel from "../TeckStack/StackLabel";
import ProjectData from "./ProjectData";

export default function ProjectOverview() {
  return (
    <div>
      <StackLabel color="#a1c8e9" name="Back End"></StackLabel>
      <StackLabel color="#fff69b" name="Front End"></StackLabel>
      <StackLabel color="#bcdfc9" name="Full Stack"></StackLabel>
      <ProjectData></ProjectData>
    </div>
  );
}
