/*
 * Copyright 2017-2020 Emmanuel Keller / Jaeksoft
 *  <p>
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  <p>
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  <p>
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {hot} from 'react-hot-loader/root';
import React from 'react';
import FieldsTable from "./FieldsTable";

const FieldsView = (props) => {

  return (
    <div className="field-view">
      <FieldsTable oss={props.oss}
                   selectedIndex={props.selectedIndex}
                   selectedField={props.selectedField}
                   setSelectedField={props.setSelectedField}/>
    </div>
  );

}

export default hot(FieldsView);
