<template>
<v-row justify="center">
    <!--V-DIALOG is a popup screen-->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add new project</v-btn>
      </template>
      <v-card>
          <!--POPUP heading-->
        <v-card-title>
          <span class="headline">New project data</span>
        </v-card-title>
        <!--POPUP content-->
        <v-card-text>

           <!--for error validation we need a reference value REF="MYTEST" on our v-container within which we error check user input.
               We run the error validation in the method SUBMIT below -->
          <v-container>
            <v-row>
              <v-col cols="12">
                  <!--PREPEND-ICON allows us to add an icon-->
                  <!--FORM VALIDATION-We will bind an array of rules to this property called INPUTRULES :rules="inputRules" (defined below)-->
                <v-text-field label="Title*" required v-model="popTitle" prepend-icon="mdi-file-edit" :rules="inputRules"></v-text-field>
              </v-col>
              <v-col cols="12">
                  <!--V-TEXTAREA gives a large area with scroll bar for data entry-->
                <v-textarea label="Description*" required v-model="popContent" prepend-icon="mdi-book-open-variant" :rules="inputRules"></v-textarea>
              </v-col>
              <v-col cols="12">
                  <!--PERSISTENT-HINT="message" This msg is always displayed-->
                <v-text-field label="Assigned to" hint="If left blank the status UNASSIGNED will be applied" persistent-hint v-model="popPerson" prepend-icon="mdi-human-child" :rules="inputRules"></v-text-field> 
              </v-col>
                <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Ongoing', 'Complete', 'Overdue', 'Unassigned']"
                  label="Current Status*"
                  required v-model="popStatus"
                  prepend-icon="mdi-battery-charging-50"
                ></v-autocomplete>
              </v-col>

            <!--DATE entry-->
                <!-- <v-text-field slot="activator" :value="formattedDate" readonly clearable v-model="popDue" label="Date due for completion" prepend-icon="mdi-calendar-range"> -->
                <v-text-field slot="activator" readonly clearable v-model="popDue" label="Date due for completion" prepend-icon="mdi-calendar-range">
                </v-text-field>
                <v-date-picker v-model="popDue" @change="menu = false">
                </v-date-picker>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <!--POPUP end of content-->
        <!--POPUP start of actions SAVE/CANCEL-->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="myClearing">cancel</v-btn>
          <v-btn color="blue darken-1" text @click="submit" dialog = false>Save</v-btn>
        </v-card-actions>
        <!--POPUP end of actions-->
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
// This allows us to change date format. To enable, 1st go to cmd prompt:    run npm install date-fns
import format from 'date-fns/format'

export default {
    data() {
        return {
            // initialise popup screen fields to blank
            popTitle: '',
            popContent: '',
            popPerson: '',
            popStatus: '',
            popDue: null,
            // dialog: false means do not display the popup screen
            dialog: false,
            menu: false,
            //                 WARNING VALIDATION using INPUTRULES
            // define an array of input rules (called inputRules)
            // each rule is a FUNCTION working on input fields
            inputRules: [
              // length must be 3+ characters OR error
              v => v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods: {
        // write data from popup screen to log file
        submit() {
          console.log("SUBMIT about to run", this.popTitle, this.popContent, this.popPerson, this.popStatus, this.popDue, "dialog is", this.dialog)
          // ERROR VALIDATION - run before update MYTEST is the reference name given to the container that hold the fields we are error checking
          //                                      VALIDATE is a method we call to see if this is valid
          // if(this.$refs.form.validate()){
            // error checking ok so run update
            console.log("SUBMIT has run", this.popTitle, this.popContent, this.popPerson, this.popStatus, this.popDue, "dialog is", this.dialog),
            // call method myClearing to clear popup screen fields
            this.myClearing()
        // }
        },
        myClearing() {
         // initialise popup screen fields to blank
         console.log("SUBMIT/CANCEL:values before clearing", this.popTitle, this.popContent, this.popPerson, this.popStatus, this.popDue, "dialog is", this.dialog),
            this.popTitle= '',
            this.popContent= '',
            this.popPerson= '',
            this.popStatus= '',
            this.popDue= null,
            // close the popup screen
           this.dialog= false 
           console.log("SUBMIT/CANCEL:values after clearing", this.popTitle, this.popContent, this.popPerson, this.popStatus, this.popDue, "dialog is", this.dialog)  
        },
        // This calculation will return an updated value to popDue
    },
  computed: {
    formattedDate () {
      console.log("Reformat the date BEFORE: popDue=", this.popDue)
      // This tests & returns a reformatted date. It uses the FORMAT imported above (after running NPM INSTALL DATE-FNS)
      // the 'question mark' tests if popDue is blank with FALSE -will return value on right of the COLON ":"
      //                              ...if not blank with TRUE  -will return value on left  of the COLON ":" but reformatted.
      return this.popDue ? format(this.popDue, 'Do MMM YYYY') : ''
        console.log("Reformat the date AFTER: popDue=", this.popDue)
    }
  }
    }
    
</script>