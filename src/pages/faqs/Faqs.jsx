import React from 'react'
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from '@mui/material/AccordionActions';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";



function Faqs() {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <main className=" m-10">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <section>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
            <p style={{ color: colors.greenAccent[500] }}>Question 1</p>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            doloremque esse ratione expedita! Assumenda ex odio possimus
            repellendus sit aperiam. Repudiandae numquam recusandae rem earum
            error voluptas odit ipsam dignissimos molestias doloremque vitae
            minima itaque laboriosam, debitis ab aliquid maiores sequi iure
            consequuntur fuga ut cum cupiditate eligendi. Natus, maiores?
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
            <p style={{ color: colors.greenAccent[500] }}>Question 2</p>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            doloremque esse ratione expedita! Assumenda ex odio possimus
            repellendus sit aperiam. Repudiandae numquam recusandae rem earum
            error voluptas odit ipsam dignissimos molestias doloremque vitae
            minima itaque laboriosam, debitis ab aliquid maiores sequi iure
            consequuntur fuga ut cum cupiditate eligendi. Natus, maiores?
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
            <p style={{ color: colors.greenAccent[500] }}>Question 3</p>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            doloremque esse ratione expedita! Assumenda ex odio possimus
            repellendus sit aperiam. Repudiandae numquam recusandae rem earum
            error voluptas odit ipsam dignissimos molestias doloremque vitae
            minima itaque laboriosam, debitis ab aliquid maiores sequi iure
            consequuntur fuga ut cum cupiditate eligendi. Natus, maiores?
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
            <p style={{ color: colors.greenAccent[500] }}>Question 4</p>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            doloremque esse ratione expedita! Assumenda ex odio possimus
            repellendus sit aperiam. Repudiandae numquam recusandae rem earum
            error voluptas odit ipsam dignissimos molestias doloremque vitae
            minima itaque laboriosam, debitis ab aliquid maiores sequi iure
            consequuntur fuga ut cum cupiditate eligendi. Natus, maiores?
          </AccordionDetails>

          <AccordionActions className=' gap-8'>
            <button>Cancel</button>
            <button>Agree</button>
          </AccordionActions>
        </Accordion>
      </section>
    </main>
  );
}

export default Faqs