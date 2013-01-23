# pk-extraction

A command-line app for extracting names and coordinates of places in Helsinki's Palvelukartta data.

## Usage

If you've installed this globally (npm install -g pk-extraction), just run `pk-extraction`.

Otherwise run `node ./src/pk-extraction.js`. The data is retrieved from the REST API using the [palvelukartta package](https://github.com/JaniL/palvelukartta).

Each line in stdout will be a placename and its coordinates (lon,lat) separated by a pipe.

    Kauniaisten skeittipuisto|60.210346,24.721437