import React from 'react';

// material ui
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';

function Home() {
    const updateListHeader = {
        fontSize: '1.4vw',
        marginBottom: '0px',
    
    }

    const updateList = {
        fontSize: '1.0vw',
        marginBottom: '0px',
    
    }

    return (
        <div style={{                
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>


            <article style={{ 
                backgroundColor: 'RGBA(255,255,255,0.9)', 
                width: '95vw', 
                minWidth: '800px',
                height: '40vw',
                minHeight: '80vh', 
                marginTop: '35px', 
                padding: '20px', 
                borderRadius: '25px', 
                boxShadow: '5px 5px RGBA(255,255,255,0.3)',
                justifyContent: 'left',
                position: 'relative',
                alignItems: 'left' ,
                overflow: 'hidden'}}
            >

                
                <Typography align='left' variant='h3'>Process Management Tool</Typography>                
                <Typography style={updateListHeader}><b>Purpose</b></Typography>  
                    <Typography>This application is designed to improve the intercommunication between departments and from the lab to Project Managers about process status of open testing.</Typography>

                <Typography style={updateListHeader}><b>Getting Started...</b></Typography>  
                    <li>Please submit your name (above) then navigate to "Worklist" in the navigation bar (above).</li>
                    <li>Make selections based on Method(s), Analysis Section(s), and/or Department(s).</li>
                    <li>Once rendered users can immediately begin attaching notes to particular tests by clicking the pencil icon along the test's rows. Notes can be applied per-test or to the entire Order (by method). New notes can be applied and a record of all notes is available per item. Notes cannot be deleted or edited, please make a new note as the correction.</li>
                    <li>Once notation is complete, navigate to the Menu (bottom right button) and select "Email". Select "Keep" or "Ignore" on any warnings and open the downloaded email template in Outlook. Click "Reply All" then "Send". This email will be sent to the relevant PMs and other team members.</li>                 

                <Typography style={updateListHeader}><b>Updates and Coming Features</b></Typography> 

                <div style={{ height: '100%', overflow: 'scroll', paddingLeft: '30px', paddingBottom: '200px' }}>

                    <Typography><i>Open to any user suggestions, please contact the administrator (Erik.Portill@tentamus.com) with any suggestions.</i></Typography>                
                    
                    <Typography style={updateList}><b>To Do list</b></Typography>  
                        <li>Validate Hamilton Auto-Pipette App in QualTrax for official use.</li>
                        <li>Adjust printing formatting on Print Mode</li>
                        <li>Control Charts, sourced from LIMS.</li>
                        <li>Sequence Generator for Excel-based batch systems.</li>

                    <Typography style={updateList}><b>Wishlist</b></Typography>                                                  
                        <li>Batch Manager for Excel-based batches for Chromatography Dep.</li>

                    <Typography style={updateList}><b>Updates Complete 12-21-2021</b></Typography>  
                    <li>Worklist Pagination<b> now Worklist is paginated to help improve render time an. </b></li>
                    <li>Client Search<b> On Worklist, users can now search by Client by selecting that option (next to Lab Order/others)</b></li>
                    <li>Distribution Image Query<b> In distribution mode and image icon is now selectable to download and view any PDFs available.</b></li>
                    <li>Filtering<b> Filtering now on Column Headers in List Mode only and dynamically shows what is/is not a match within the current filters.</b></li>


                    <Typography style={updateList}><b>Updates Complete 12-09-2021</b></Typography>  
                        <li>Business Information<b> New options for viewing Parameter Scope</b></li>
                        <li>PDF Viewer<b> On the Laboratory Order level on Worklist users can now view any PDF attached, including Chain of Custody</b></li>

                    <Typography style={updateList}><b>Updates Complete 11-30-2021</b></Typography>  
                        <li>Print Mode:<b> A new menu optino, Print Mode, allows users to select items from the worklist to send to a Print Preview. There, you can optionally sort by Order or Method, break page per Order/Method, and hide/show Hold Time information. Further development is ongoing for formatting of print-outs.</b></li>

                    <Typography style={updateList}><b>Updates Complete 10-29-2021</b></Typography>  
                        <li>Chromatography Batching:<b> The functionality has been built for Chromatraphy departing to fully batch externally from their previous workflow model using Excel Power Query and VBA. Additionally, users have the power to modify the batch-groups ("Cannapest", "Glyphosates", et al) to suit the moment. For example, for a group that has a sub-division by Matrix type, if a new matrix hits the worklist, the user can set to which sub-division that will be flagged for. The tool also allows users to add samples to existing batches that are yet to be started. Currently, this is in the "testing" phase and will be incrementally scaled to the rest of the methods.</b></li>

                    <Typography style={updateList}><b>Updates Complete 10-13-2021</b></Typography>  
                        <li>Business Information:<b> Full functionality passed to all three categories. Chart dynamically displays selection on any category. Breakdowns now can be toggled between categories.</b></li>

                    <Typography style={updateList}><b>Updates Complete 10-12-2021</b></Typography>  
                        <li>Business Information:<b>Extended the information provided. When clicking a Client, in addition to a month-year pivot count, a new table renders displaying a full montly breakdown pivoted by method. Categories now tabulated.</b></li>

                    <Typography style={updateList}><b>Updates Complete 10-11-2021</b></Typography>  
                        <li>Micro Batch Mode:<b>Orders now de-selectable prior to sending to Excel. Edits to methods now reflect on excel sheet. Excel sheet rows now increase as string inputs get longer.</b></li>

                    <Typography style={updateList}><b>Updates Complete 09-30-2021</b></Typography>  
                        <li>No Results Returned bug:<b>If seraches returned 0 results from LIMS it would error and result in the unspecific error page. The worklist will now display that nothing is availble to display.</b></li>
                        <li>Many Sequences:<b>A test which exists in multiple measurement sequences resulted in an over-flow issue on the worklist, but also the filter menu resulted in a long list of duplicate and comma-dilineated entries. Back end now handles this appropriately so that the list word-wraps and the filters make sense. The filtering function also considers this issue now as well.</b></li>

                    <Typography style={updateList}><b>Updates Complete 09-21-2021</b></Typography>  
                        <li>Material UI Update to v.5<b> Material UI is the framework that allows for the display to appear as polished as it does. The framework had a major update so some things may appear slightly different.</b></li>
                        <li>Name Submit Form<b> slightly improved so that it's not a jumble.</b></li>
                        <li>Email Filter<b> has been applied and allows for a quick way to filter down the worklist to only orders that require notation.</b></li>
                        <li>Sequence Builder <b>: New workspace for specific instrumentation concerns. At this time, "short method" builder for LC-MS/MS on Multiquant is available.</b></li>
                        

                    <Typography style={updateList}><b>Updates Complete 09-17-2021</b></Typography>  
                        <li>Note Form: <b>When field loads, cursor jumps to field for immediate typing. Hitting Enter submits notes. If "Multiple" is selected, enter will submit to the samples selected. The field drops after the note has been submitted and rendered onto the worklist.</b></li>
                        <li>Business Information Tables: <b>For each of the three categories users can expand and show a break down of each month per year.</b></li>

                    <Typography style={updateList}><b>Updates Complete 09-16-2021</b></Typography>  
                        <li>Bug Fixes: <b>Worklist Query no longer filters out "ATE Status 2", which is "Measurement Started". Duplication of ATEs propogating due to Method translation table having multiples for a given method ID, now filtering for "us" specifically.</b></li>
                        <li>Business Information Charts.<b> These are not proven to be accurate, still in development.</b></li>    

                    <Typography style={updateList}><b>Updates Complete 09-14-2021</b></Typography>  
                        <li>Add names/tags to searches saved in history.<b>Users can add and edit names at will in Search History menu.</b></li>                
                        <li>Method Name do not always match LIMS designation.<b>Query was reversed in determining which table to look at initial for Method name.</b></li>                
                        <li>Duplicate method rows on some testing.<b>For jobs assigned via Spectra, duplicate rows in the linking table between ATE and Parameter Scope appeared, one each for Scope and Spectra. This was resolved utilizing a SUBSELECT in the JOIN.</b></li>
                    
                    
                    <Typography style={updateList}><b>Updates Complete 08-26-2021</b></Typography>  
                        <li>Global filters and view switch menu<b>Available anywhere in Worklist, a drawer-menu for filters and view switchers. To be further visually modified.</b></li>
                        <li>Improve Measurement Sequence data query, query db for all MSeq each ATE exists in, compile as list on Batch Cell with added details onClick. Current behavior only shows finalized data source sequence, therefore it does not show "batched but not finalized" "state".<b>Query advanced to include Sequence Position, tying any batches associated with each ATE, all of which is rendered on the worklist. So this now shows what is "batched" and where it's "batched".</b></li>
                    
                    <Typography style={updateList}><b>Updates Complete 08-10-2021</b></Typography>                      
                        <li>Digestion cross-query<b>Adds as addendum to Method on Test Cell if Digestion is requested on the specific container. Needs further refinement.</b></li>        

                    <Typography style={updateList}><b>Updates Complete 08-06-2021</b></Typography>                      
                        <li>More filters, columns, and column customizations. Dynamic filter menu.<b>Sorting added, more filters added. Requires more dev to improve performance and dynamic filters menus. Blank entries filtering working.</b></li>

                    <Typography style={updateList}><b>Updates Complete 08-03-2021</b></Typography>  
                        <li>Toggler to show/hide in-transit, 'no location', testing.<b>Expanded filters for all columns.</b></li>
                
                    <CoffeeIcon style={{ width: '100%', fontSize: '50vw', color: 'white' }} />
                        
                </div>

                <img src='/images/logo.jpg' alt='logo' style={{ width: '33%', opacity: "0.25", position: 'absolute', right: 25, top: 25}} />

            </article>

            <img alt='home' src='/images/bg.jpg' 
                style={{
                    marginTop: '0px',
                    display: 'block',
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: '-1',
                }}
            
            />   
        </div>
        )
}

export default Home;
