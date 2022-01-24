const csv = require('csv-parser');
const fs = require('fs');

try {
    fs.unlinkSync('./canada.txt')
    console.log("file has been removed : canada.txt")
    fs.unlinkSync('./usa.txt')
    console.log("file has been removed : usa.txt")
} catch(err) {
    console.log(err)
}

fs.createReadStream('./input_countries.csv')
    .on('error', (err) => {
        console.log(err)
    })
    .pipe(csv())
    .on('data', (row) => {
        if(row['country'] == "Canada")
        {
            var str = `${row['country']}, ${row['year']}, ${row['population']}\n`
            fs.appendFile('canada.txt', str, function (err) {
                if(err)()=> {console.log(err)};
            });

        }
        // data for USA
        else if(row['country'] == "United States")
        {
            var str = `${row['country']}, ${row['year']}, ${row['population']}\n`
            fs.appendFile('usa.txt', str, function (err) {
                if(err)()=> {console.log(err)};
            });
        }
    })
    .on('end', () => {
        console.log("successfully completed")
    })