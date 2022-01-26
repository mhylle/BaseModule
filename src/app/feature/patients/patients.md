# Patients

### Async data handling

The patients feature demonstrates several patterns:
The list here is using the async pipe to load the data. This means that we do not have to handle
subscription/unsubscription in the component as Angular takes care of this for us.

This is the preferred way of working with data.

### Virtual data lists

The list here is using the virtual scroll to show data. This is a good way to show a large amount of data and will
ensure that the browser is not bogged down by trying to display to much data at a time.

### Data selection

From the list of patients we can select a patient and navigate to the patient details page.

### Component communication

The list here is using the `selectedPatient` event to communicate with the patient details page. This means that while
the patient list page does not know about the patient details page, it can communicate with it, through events.

### Editing data

When the details page is shown, it is possible to edit a patient. This describes the pattern for reading query
parameters and updating the data.

