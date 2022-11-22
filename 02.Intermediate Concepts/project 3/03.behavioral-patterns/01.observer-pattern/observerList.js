let ObserverList = function () {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;
}

module.exports = ObserverList;

/*
    observerList object => {
        observerList: [],
        add: function (obj) {
            //push object into our observerList array
        },
        get: function (index) {
            //returns an object at a given index from the observerList array
        },
        count: function () {
            //returns the total number of objects in the observerList array
        },
        removeAt: function (index) {
            //remove from the observerList array obj at position index
        }
        indexOf: function (obj, startIndex) {
            //returns the index of an obj at the given startIndex if it 
            //exists within the observerList array else return -1
        }
    }
*/