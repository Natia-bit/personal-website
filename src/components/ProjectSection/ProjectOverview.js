import StackLabel from "../TeckStack/StackLabel";
import ProjectData from "./ProjectData";

export default function ProjectOverview() {
  return (
    <div>
      <StackLabel color="#0056b3" name="Back End"></StackLabel>
      <StackLabel color="#ffcd38" name="Front Emd"></StackLabel>
      <StackLabel color="red" name="Full Stack"></StackLabel>
      <ProjectData></ProjectData>
    </div>
  );
}
