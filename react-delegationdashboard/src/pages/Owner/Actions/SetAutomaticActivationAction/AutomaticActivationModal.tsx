import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import { object } from 'yup';
import { ActionModalType } from 'helpers/types';

const AutomaticActivationModal = ({
  show,
  title,
  description,
  handleClose,
  handleContinue,
}: ActionModalType) => {
  return (
    <Modal show={show} onHide={handleClose} className="modal-container" animation={false} centered>
      <div className="card card-small">
        <div className="card-body text-center">
          <p className="h3" data-testid="delegateTitle">
            {title}
          </p>
          <p className="lead mb-spacer">{description}</p>

          <Formik
            initialValues={{
              option: 'yes',
            }}
            onSubmit={values => {
              handleContinue(values.option);
            }}
          >
            {props => {
              const { handleSubmit, values, handleBlur, handleChange } = props;

              return (
                <form onSubmit={handleSubmit} className="text-center">
                  <div className="form-group mb-spacer">
                    <div className="input-group">
                      <select
                        name="option"
                        className="dropdown"
                        value={values.option}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-wrap mt-spacer">
                    <button
                      type="submit"
                      className="btn btn-outline-primary mx-2"
                      id="continueDelegate"
                      data-testid="continueDelegate"
                    >
                      Continue
                    </button>
                    <button
                      id="closeButton"
                      className="btn btn-outline-primary mx-2"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default AutomaticActivationModal;
