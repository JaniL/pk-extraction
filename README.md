# pk-extraction

A command-line app for extracting names and coordinates of places in Helsinki's Palvelukartta data.

## Usage

The program takes as arguments names of cities and the corresponding filenames into which the station data should be added. For example:

    pk-extraction Helsinki=/path/to/helsinki.txt Vantaa=/path/to/vantaa.txt

The data is retrieved from the REST API using the [palvelukartta module](https://github.com/JaniL/palvelukartta).

Each line in stdout will be a placename and its coordinates (lon,lat) separated by a pipe.

    Kauniaisten skeittipuisto|60.210346,24.721437