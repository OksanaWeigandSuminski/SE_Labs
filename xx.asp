<%
  dim fname, city
  fname=Request.Form("name")
  city= Request.Form("city")
  Response.write("Dear " & fname & ". " )
  Response.write("Good life in " & city & ", peace. " )
%>
