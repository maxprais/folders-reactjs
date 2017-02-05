import React from 'react';

class FileSystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };

        this.getFoldersData = this.getFoldersData.bind(this);
    }

    componentDidMount() {
        this.getFoldersData();
    }

    getFoldersData() {
        let request = new Request('http://dvns.me/yaniv/clientest/public/explorePictures?path=folder2', {
            method: 'GET',
            headers: new Headers({
                'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456'
            }),
        });

        fetch(request).then(response => {
            return response.json();
        }).then(responseJson => {
            this.setState({data: responseJson.data});
        });
    }

    render() {
        if (Object.keys(this.state.data).length === 0) {
            return (
                <div id="main"></div>
            )
        } else {
            return (
                <div id="main">
                    <Row data = {this.state.data} />
                </div>
            )
        }
    }
}

export class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.data.children
        };
    }

    render() {
        let folders = [];
        if (typeof this.props.data !== 'undefined') {
            if (this.props.data.label === 'root') {
                folders.push(<Folder key={this.props.data.label}/>);
            } else {
                this.props.data.children.forEach((value) => {
                    folders.push(<Folder key={value.label}/>);
                });
            }
        }

        return (
            <div className='row'>
                {folders}
            </div>
        )
    }
}

export class Folder extends React.Component {

    render() {
        return (
            <div className="folder folder-closed"></div>
        )
    }
}


export default FileSystem;