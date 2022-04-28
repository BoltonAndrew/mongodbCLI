exports.addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
  } catch (error) {
    throw new Error(error);
  }
};

exports.listMovies = async (collection, search) => {
  try {
    if (search) {
      return await collection.find({ title: search }).toArray();
    } else {
      return await collection.find({}).toArray();
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateMovie = async (collection, filterObj, updateObj) => {
  try {
    const updateCheck = await collection.updateOne(filterObj, {
      $set: updateObj,
    });
    if (updateCheck.modifiedCount > 0) {
      console.log("Successfully updated");
    } else {
      console.log("No movie found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteMovie = async (collection, filterObj) => {
  try {
    const deleteCheck = await collection.deleteOne(filterObj);
    if (deleteCheck.deletedCount > 0) {
      console.log("Successfully deleted");
    } else {
      console.log("No movie found");
    }
  } catch (error) {
    throw new Error(error);
  }
};
