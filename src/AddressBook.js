AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}