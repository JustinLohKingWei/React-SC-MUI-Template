import styled from "styled-components";
import Section from "../components/Section";
import { Checkbox, FormControlLabel, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const AccountTab = styled(Paper)`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
`;

function AdvancedSection() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Advanced">
      {currentTemplate.accounts?.map((data, index) => {
        return (
          <AccountTab>
            <LineSection>
              <TextField
                key={index}
                label="Account Number"
                defaultValue={data.account_number || ""}
                sx={{
                  width: "8rem",
                }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (currentTemplate.accounts !== undefined) {
                    const accountsCopy = [...currentTemplate.accounts];
                    accountsCopy[index].account_number = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      accounts: accountsCopy,
                    });
                  }
                }}
              />
              <TextField
                label="Label/ Display Name"
                variant="outlined"
                defaultValue={data.label || ""}
                sx={{
                  width: "30rem",
                }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.accounts !== undefined) {
                    const accountsCopy = [...currentTemplate.accounts];
                    accountsCopy[index].label = newValue;
                    accountsCopy[index].display_name = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      accounts: accountsCopy,
                    });
                  }
                }}
              />
            </LineSection>
            <LineSection>
              <TextField
                label="Authorization Name / Username"
                variant="outlined"
                defaultValue={data.authorization_name || ""}
                sx={{
                  width: "25rem",
                }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.accounts !== undefined) {
                    const accountsCopy = [...currentTemplate.accounts];
                    accountsCopy[index].authorization_name = newValue;
                    accountsCopy[index].username = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      accounts: accountsCopy,
                    });
                  }
                }}
              />
              <TextField label="Password" variant="outlined" type="password" />
            </LineSection>
            <LineSection>
              <TextField
                label="SIP Server Host"
                variant="outlined"
                defaultValue={data.sip_server_host || ""}
                disabled
              />
              <TextField
                label="SIP Server Port"
                variant="outlined"
                sx={{
                  width: "10rem",
                }}
                defaultValue={data.sip_server_port || ""}
              />
            </LineSection>
            <LineSection>
              <TextField
                label="CID Source"
                variant="outlined"
                defaultValue={data.cid_source || ""}
              />
              <TextField
                label="CP Source"
                variant="outlined"
                defaultValue={data.cp_source || ""}
              />
            </LineSection>
            <LineSection>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={data.proxy_enable}
                    onChange={(event) => {
                      const newValue = event.target.checked;
                      if (currentTemplate.accounts !== undefined) {
                        const accountsCopy = [...currentTemplate.accounts];
                        accountsCopy[index].proxy_enable = newValue;
                        setcurrentTemplate({
                          ...currentTemplate,
                          accounts: accountsCopy,
                        });
                      }
                    }}
                  />
                }
                label="Proxy"
              />
            </LineSection>
            {data.proxy_enable ? (
              <LineSection>
                {" "}
                <TextField
                  label="Outbound host"
                  variant="outlined"
                  defaultValue={data.proxy_outbound_host || ""}
                />
                <TextField
                  label="Outbound Port"
                  variant="outlined"
                  defaultValue={data.proxy_outbound_port || ""}
                />
              </LineSection>
            ) : (
              <></>
            )}
          </AccountTab>
        );
      })}
    </Section>
  );
}

export default AdvancedSection;
