export default function InputGroup(props) {
    const { contentBefore, afterContent, inputType = "text", placeholder } = props;
  
    return (
        <div className="input-group mb-3 flex items-center border rounded-md shadow-sm">
            {contentBefore && (
            <div className="border-r p-2 bg-gray-100">
                <div>
                {contentBefore}
                </div>
            </div>
            )}
    
            <input
            type={inputType}
            className="px-4 py-2 border-none outline-none flex-1"
            placeholder={placeholder}
            />
    
            {afterContent && (
            <div className="p-2 bg-gray-100">
                {afterContent}
            </div>
            )}
        </div>
    );
  }