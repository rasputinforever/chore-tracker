// todos here when not in use

// utilize MYSQL!!!

// sequence builder for LC or GC MS/MS (same files)

// re-parse the "group", will need to query up the batch settings which show the groupings
// select "group"
// parse batch files from that gropu
// select batch
// will re-parse batch based on group
    // P2220 needs to get Sample ID, Matrix, Mass, and DF
    // output the samples as such ...
    // 21-000123-0001 5g Potato
        // add a DF addendum if there is a non-x value on the DF (eg, x5 is 5-times, 3x is 1/3-times)

// may add mroe details to the batch data settings, for example, saving the naming scheme, or something like that, so this can be more scaleable

// on potency it's not skipping a row for SD for some reason. Answer: the input says "cell" when it should say "row". Fix that component
// on potency, skip over the mass/vol columns, or maybe figure out how to do that generally speaking (P2220 has the same issue, and MINT)
  // maybe an input "columns to skip over"
  // make a "light mode" for inputting cells. Organics wants only client/due/rec/etc on each row with a new order on it, so figure that one out. 


