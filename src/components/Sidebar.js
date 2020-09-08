import React, {useState} from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'


const Sidebar = ({ id }) => {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <div className='d-flex flex-column' style={{width: '250px'}} >
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
                <Nav variant='tabs' className='justify-content-center' >
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY} style={{outline: 'none'}}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY} style={{outline: 'none'}}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='border-right overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className='p-2 border-top border-right small'>
                    Your Id: <span className='text-muted'>{id}</span>
                </div>
                <Button className='rounded-0' onClick={() => setModalOpen(true)}>
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen
                    ? <NewConversationModal closeModal={closeModal} />
                    : <NewContactModal closeModal={closeModal} />
                }
            </Modal>

        </div>
    );
};

export default Sidebar;
