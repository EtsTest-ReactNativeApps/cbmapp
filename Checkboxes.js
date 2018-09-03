import React from 'react';
import PropTypes from 'prop-types';

const checkboxes = [
  {
    name: 'check-box-1',
    key: 'checkBox1',
    label: 'Check Box 1',
  },
  {
    name: 'check-box-2',
    key: 'checkBox2',
    label: 'Check Box 2',
  },
  {
    name: 'check-box-3',
    key: 'checkBox3',
    label: 'Check Box 3',
  },
  {
    name: 'check-box-4',
    key: 'checkBox4',
    label: 'Check Box 4',
  },
  {
    name: 'check-box-5',
    key: 'checkBox5',
    label: 'Check Box 5',
  },
  {
    name: 'check-box-6',
    key: 'checkBox6',
    label: 'Check Box 6',
  },
  {
    name: 'check-box-7',
    key: 'checkBox7',
    label: 'Check Box 7',
  },
  {
    name: 'check-box-8',
    key: 'checkBox8',
    label: 'Check Box 8',
  },
];

export default checkboxes;


const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;