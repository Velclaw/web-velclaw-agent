import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.onkernel.com/mcp",
  description: "Kernel cloud browsers for AI agents",
  auth: connect("mcp.onkernel.com/prj_o1cpVn1qZaCSsRXandVna0dxXltO"),
});
