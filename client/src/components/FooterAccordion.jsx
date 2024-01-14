import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FooterAccordion() {
  return (
    <div className='w-full m-auto'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3 className='text-black'>About Chibz</h3>
        
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col'>
            <a href="" className='hover:underline text-blue text-sm '>History</a>
            <a href="" className='hover:underline text-blue text-sm'>Careers</a>
            <a href="" className='hover:underline text-blue text-sm'>suppliers</a>
          </div>

        
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h3 className='text-black'>Help</h3> 
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col'>
            <a href="" className='hover:underline  text-blue text-sm'>Customer Service</a>
            <a href="" className='hover:underline  text-blue text-sm'>Order Status</a>
            <a href="" className='hover:underline  text-blue text-sm'>FAQ</a>

            </div>
          
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <h3 className='text-black'>Our Website</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col'>
            <a href="" className='hover:underline  text-blue text-sm '>Terms & Conditions</a>
            <a href="" className='hover:underline text-blue  text-sm '>Privacy & Cookie Policy</a>
            <a href="" className='hover:underline text-blue  text-sm '>Accessibility</a>

          </div>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}