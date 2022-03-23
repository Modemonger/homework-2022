import express from 'express';
import smartyfile from './data/smarty.json';
const app = express();
const port = 3001;

app.get('/', (_req, res) => {
    res.send('<h1>Congratulations 🎉 You got the WCC 2022 backend server running. Good luck with your task 🙌</h1>');
})

/**
 * Example endpoint
 *  consumes: query parameter "name"
 *  returns: a JSON response
 */
app.get('/greeting', (req, res) => {
    res.json({ 'greeting': `Hello, ${req.query.name || 'World'} 👋`});
})

/**
 * TODO: Add your autocompleter endpoint below this component
 */

 const getFilteredEvents = async (input: string) => {
    const re = new RegExp(input, "i");
    const inputlenght = input.length;
    let output: Array<object> = [];
    smartyfile.forEach(item => {
      if(item.cityonly.substring(0, inputlenght).toLowerCase() == input.toLowerCase()  && output.length != 10){
        output.push(item)
      }
    })

    return output;
  };

 app.get('/autocomplete/', async (req, res) => {
  const { input: input } = req.query;

  const filteredEvents = await getFilteredEvents(input.toString());

  res.json({
    status: "success",
    responseBody: {
      filteredEvents,
    },
  });
})

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}.`);
});